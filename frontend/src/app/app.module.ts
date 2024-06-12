import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { DetailsComponent } from './image/details/details.component';
import { MatButtonModule } from '@angular/material/button';
import { ListImagesComponent } from './image/list/list-images.component';


@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
