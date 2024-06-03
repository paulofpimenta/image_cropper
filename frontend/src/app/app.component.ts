import { Component } from '@angular/core';
import { ImageComponent } from './image/image.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    ImageComponent,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
