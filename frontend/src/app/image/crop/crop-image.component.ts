import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ImageCropperComponent, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { CroppedImageMeta } from '../model/CroppedImage';
import { ImageService } from '../service/image.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-add-user',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.scss'],
  standalone:true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,ImageCropperComponent,
    ReactiveFormsModule,MatIconModule,MatSidenavModule,MatButtonModule,CommonModule,
    MatListModule, MatDividerModule,HttpClientModule,MatSlideToggleModule,MatRadioModule],
})
export class CropImageComponent {

  //Imagecroper  
  imageChangedEvent: Event | null = null;
  croppedImage: SafeUrl;
  croppedImageOnServer: any;

  aspectRatio = 4 / 3;
  showCropper = false;
  croppedImageMeta: CroppedImageMeta;

  // NgMat-Input
  fileControl: FormControl;
  display: FormControl = new FormControl("", Validators.required);
  fileStore!: FileList;
  fileName!:string;
  public files: any;
  maxSize= 16;

  //Mat-Radio
  processingOnClient: string = 'Client';
  processingChoices: string[] = ['Client', 'Server'];

  serverOn: boolean = false
  
  constructor(private sanitizer: DomSanitizer,private imageService: ImageService) {
    this.fileControl = new FormControl(this.files, [Validators.required, MaxSizeValidator(this.maxSize * 1024)])
    }

  ngOnInit() {
    this.fileControl.valueChanges.subscribe((files: any) => {
      
      if (!Array.isArray(files)) {
        console.log(files)
        this.files = [files];
      } else {
        this.files = files;
      }
    })
  }

  fileChangeEvent(event: Event ): void {
    this.imageChangedEvent = event;
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.fileName = target.files[0].name
    }
  }
  
  imageCropped(event: ImageCroppedEvent) {
      if (this.processingOnClient == 'Client') {
        this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
        this.imageService.toCroppedImageMeta(event).subscribe(imageMeta => {this.croppedImageMeta = imageMeta })
        console.log("Cropped image data on client : ", this.croppedImage)
      } else {
          this.imageService.toCroppedImageMeta(event).subscribe(imageMeta => {this.croppedImageMeta = imageMeta })
          this.imageService.uploadImage(this.fileStore[0],"test",JSON.stringify(event.imagePosition)).subscribe ( 
            response=> {
                this.serverOn = true
                let base64 = response.result.base64
                this.croppedImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + base64);
                console.log("Cropped image data on server : ", this.croppedImage)
              },
            error => {
                console.error("Error cropping image on server : ",error)
                this.croppedImage = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/server_off.webp');
            })
      }
  }
  
  imageLoaded() {
    this.showCropper = true;
    // cropper ready
  }

  loadImageFailed() {
    console.log("Image load failed")
  }

  handleFileInputChange(fileList: FileList | null): void {
    if (fileList !== null ) {
      this.fileStore = fileList;
      this.fileName = fileList[0].name
      if (fileList.length) {
        const f = fileList[0];
        const count = fileList.length > 1 ? `(+${fileList.length - 1} files)` : "";
        this.display.patchValue(`${f.name}${count}`);
      } else {
        this.display.patchValue("");
      }
    }
  }
  
}
