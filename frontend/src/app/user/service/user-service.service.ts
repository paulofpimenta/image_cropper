import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public users!:User[]; //! -> strict class initialization checks. Ensure that all class properties are initialized before they are used.

  constructor() { }

  getUsers(){
    return this.users=[{name:'Chuck Overstreet',location:[53,1]}]
  }
}
