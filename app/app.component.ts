import { Component } from '@angular/core';

import {RouterModule, Router} from '@angular/router'

import {Auth} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

    //Creating Variables to save Values for Auth0
    profile: any;
    name: string;
    image: string;
    id: any;

      constructor (private auth:Auth) {
        
         this.profile = JSON.parse(localStorage.getItem('profile'));
          
          if(this.profile == !null){
          this.name = this.profile.nickname;
        this.image = this.profile.picture;
        this.id = this.profile.user_id;
        
        console.log(this.profile);
        console.log(this.id);
        console.log(this.name);
          }

      }
        
        
       
        
      
}
