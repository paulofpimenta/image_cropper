import { Component } from '@angular/core';
import { ImageService } from '../service/image.service';
import { ImageDocument } from '../model/CroppedImage';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { InfoDetails } from '../model/InfoDetails';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-list-images',
  standalone:true,
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss'],
  imports: [MatCardModule,MatButtonModule,CommonModule],
})
export class ListImagesComponent {

  imagetest: SafeResourceUrl;
  images: ImageDocument[]
  sanitedPaths: SafeResourceUrl[] = []
  constructor(private iamgeService: ImageService,private sanitizer: DomSanitizer) {}

  ngOnInit() {

    this.iamgeService.getAllImages().subscribe({
      next:(v:InfoDetails)=> {
        this.images =  v.result
        console.log(this.images)
      },
      error: (e) => console.error(e)
      })
 
  }

}
