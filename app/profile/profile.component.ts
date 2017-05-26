import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {Auth} from '../auth.service';

import {Game} from '../appdata/game';
import {Platform} from '../appdata/platform';
import {Characters} from '../appdata/characters';
import {DataserviceService} from '../services/dataservice/dataservice.service';
import {FirebaseService} from '../services/firebaseservicecreateprofile/firebase.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DataserviceService, FirebaseService]
})
export class ProfileComponent implements OnInit {

  ngOnInit() {
  }
  
  //Variables used in component for storing value and passing to services
  name :string;
  member: string;
  game: string;
  gamename: string;
  
  //Variables used to put the user under the specific platform 
  Platform: string;
  gamenameforplatform: string;
  usernameforplatform: string;
  
  //Variables used for observables
  Username : FirebaseListObservable<any>
  response: FirebaseListObservable<any>
  UserinPlatform: FirebaseListObservable<any>;
  
  // Initializing the Selected Game name and Platform
  selectedGame:Game = new Game(1, 'Destiny'); 
 selectedPlatform:Platform = new Platform(1, 'Destiny', 'PS3');
 
  games: Game[];
  platform: Platform[];
  characters: Characters[];
  gamenameforchar : string;

  //Intitialising the Services used in this component

  constructor(private _dataService: DataserviceService, private _firebase: FirebaseService, private _router: Router, private auth: Auth) {
    this.games = this._dataService.getGames();
    console.log(this.platform);
  }
   
   
  //this function is use dto make decision of platlforms for game entered in the form
  
  onSelect(gamename) {
    this.gamenameforchar = gamename;
    console.log(this.gamenameforchar);
    this.platform = this._dataService.getPlatforms()
                 .filter((item)=> item.gamename == gamename);
    this.characters = this._dataService.getCharacters()
                  .filter((item)=> item.gamename == gamename);
  }
 
 // This function will add the user in Firebase DB to make the user count
  
  sendUser(name) {
     name = this.name;
     
    this._firebase.addUser(name)
        .subscribe(
          user => this.name = user,
          error => console.log(error)
          );
          
  }

  // This function is used to add the user information into Firebase DB(All form informartion)

   onSubmit(value: any){
  
      //adding name of user to name variable 
      this.name = value.name;
      this.game = value.gamename;
      
      console.log(this.game);
        this._firebase.setUser(value.name, value.age, value.characters,value.gamename,value.platformname, value.playerid, value.playertimeweekdaysfrom, value.playertimeweekdaysto, value.playertimeweekendsfrom, value.playertimeweekendsto, value.playertimezone)
            .subscribe( 
              user => this.response = user,
              error => console.log(error)
            ); 
       alert("PROFILE Successfully Saved to our Database "); 
       
       
       
      }
      
      //Adding user to specific game as per input in form
      
      adduserGame(){
    
        this.gamename = this.game;
        console.log(this.gamename);
        this._firebase.adduserinGame(this.gamename, this.name)
            .subscribe(
              user => this.Username = user,
              error => console.log(error)
              );
    
  }
  
  // Adding user Under specific platform
  addPlatform(values){
     this.gamenameforplatform = values.gamename;
     this.usernameforplatform = values.name;
    this.Platform = values.platformname;
    
    this._firebase.addUserinPlatform(this.gamenameforplatform, this.usernameforplatform, this.Platform)
        .subscribe(
          user => this.UserinPlatform = user,
          error => console.log(error)
          );
    
  }
    
    onGetMember(){
      
      this._firebase.getMembercount()
            .subscribe(
              user => this.member = user,
              error => console.log(error)
              );
    }
    
   

}
