import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-user',
  templateUrl: './image.component.html',
  standalone:true,
  imports: [FormsModule,RouterModule,MatButtonModule],
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {

  title = 'Cropped images';
  
  images = []
  
  
}
