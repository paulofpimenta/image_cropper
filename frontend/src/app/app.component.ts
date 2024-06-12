import { Component } from '@angular/core';
import { ImageComponent } from './image/image.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ListImagesComponent } from './image/list/list-images.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    ImageComponent,
    ListImagesComponent,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
