import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Http} from '@angular/http';
import {last} from "rxjs/operator/last";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import 'rxjs/Rx';

@Injectable()
export class UsercountService {

  constructor(private _http: Http) { }
  
  //Getting user information for Game Left
  
  getuser4left(){
      
      return this._http.get('https://gaming-community-9270c.firebaseio.com/Left 4 Dead 2/users.json')    
                      .map(response => response.json());
      
  }

  //Getting user information for Game Destiny
  
  getuser4destiny(){
    
    return this._http.get('https://gaming-community-9270c.firebaseio.com/Destiny/users.json')    
                      .map(response => response.json());
    
  }
  
  //Getting user information for Game Diablo
  
   getuser4diablo(){
    
    return this._http.get('https://gaming-community-9270c.firebaseio.com/Diablo 3/users.json')    
                      .map(response => response.json());
    
  }

  //Getting user for Game War
  
  getuser4war(){
    
    return this._http.get('https://gaming-community-9270c.firebaseio.com/World of Warcraft/users.json')    
                      .map(response => response.json());
    
  }

}
