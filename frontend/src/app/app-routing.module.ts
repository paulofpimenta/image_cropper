import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { CropImageComponent } from './image/crop/crop-image.component';

const routes: Routes = [{
  path: '',
  title: 'Home',
  component:ImageComponent,
},
  //children:[]
{
  path: 'add_user',
  component: CropImageComponent,
  title: 'New user'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
