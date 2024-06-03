import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone:true,
  imports: [FormsModule,RouterModule,MatButtonModule],
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {

  title = 'User\'s Location';

  
  @Output() cancel = new EventEmitter<void>();
  
  users = []
  
  
}
