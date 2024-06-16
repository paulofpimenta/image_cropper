import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';
import { ImageDocument } from '../model/CroppedImage';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { InfoDetails } from '../model/InfoDetails';

@Component({
  selector: 'app-list-images',
  standalone:true,
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss'],
  imports: [MatCardModule,MatButtonModule,CommonModule],
})
export class ListImagesComponent implements OnInit {

  images: ImageDocument[] = []
  
  constructor(private imageService: ImageService) {}

  ngOnInit() {
  
    this.getImages()
 
  }

  getImages() {
    this.imageService.getAllImages().subscribe({
      next:(v:InfoDetails)=> {
        this.images =  v.result
        console.log("Images : ", this.images)
      },
      error: (e) => console.error(e)
      })
  }

}
