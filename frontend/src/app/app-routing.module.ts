import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './image/image.component';
import { AddUserComponent } from './image/crop/crop-image.component';

const routes: Routes = [{
  path: '',
  title: 'Home',
  component:UserComponent,
},
  //children:[]
{
  path: 'add_user',
  component: AddUserComponent,
  title: 'New user'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
