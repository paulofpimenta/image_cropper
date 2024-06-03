import { Routes } from '@angular/router';
import { CropImageComponent } from './app/image/crop/crop-image.component';
import { ImageComponent } from './app/image/image.component';
const routeConfig: Routes = [
  {
    path: '',
    title: 'Home',
    component:ImageComponent,
  },
    //children:[]
  {
    path: 'crop_image',
    component: CropImageComponent,
    title: 'Image cropper'
  }
];

export default routeConfig;