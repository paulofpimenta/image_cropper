import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ListImagesComponent } from './list/list-images.component';


@Component({
  selector: 'app-user',
  templateUrl: './image.component.html',
  standalone:true,
  imports: [FormsModule,RouterModule,MatButtonModule,ListImagesComponent],
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {

  title = 'Cropped images';
  
}
