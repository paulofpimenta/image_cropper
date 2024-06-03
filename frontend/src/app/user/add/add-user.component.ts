import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ImageCropperComponent, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  standalone:true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,ImageCropperComponent],
})
export class AddUserComponent {

  enteredName = ''
  imageChangedEvent: Event | null = null;
  croppedImage: SafeUrl  = '';
  
  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
  }
  
  imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
  // event.blob can be used to upload the cropped image
  }
  
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
