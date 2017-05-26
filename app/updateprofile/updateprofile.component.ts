import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

import {Auth} from '../auth.service';
import {FirebaseService} from '../services/firebaseserviceupdateprofile/firebase.service';
import {DataserviceService} from '../services/dataservice/dataservice.service';

import {GamingPipe} from '../custompipe/gaming.pipe';

import {Game} from '../appdata/game';
import {Platform} from '../appdata/platform';
import {Characters} from '../appdata/characters';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css'],
  providers: [FirebaseService, DataserviceService, GamingPipe]
})
export class UpdateprofileComponent implements OnInit {
  //Setting up varibale to use them for storing values used in below
   playeridupdate:any;
  member: string;
  name: string;
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
  
  //To View Pofile Variables
  playerid: any
  profileinfo : FirebaseListObservable<any>;
  
  
  selectedGame:Game = new Game(1, 'Destiny'); 
 selectedPlatform:Platform = new Platform(1, 'Destiny', 'PS3');
 
  games: Game[];
  platform: Platform[];
  characters: Characters[];
  gamenameforchar : string;

  constructor(private _firebase: FirebaseService, private _dataService : DataserviceService, private _router: Router, private auth : Auth) { 
    this.games = this._dataService.getGames();
    console.log(this.platform);
  }

  ngOnInit() {
  }
  
  // Fpunstion used for setting up the Selection for Games and Platform
   onSelect(gamename) {
    this.gamenameforchar = gamename;
    console.log(this.gamenameforchar);
    this.platform = this._dataService.getPlatforms()
                 .filter((item)=> item.gamename == gamename);
    this.characters = this._dataService.getCharacters()
                  .filter((item)=> item.gamename == gamename);
  }
 

  //Sending Updated Profile data to Firebase
  onUpdate(value){
    
      console.log(value);
      console.log(value);
      this.playeridupdate = value.playerid;
      console.log(this.playeridupdate);
        this._firebase.setUser(value.name, value.age, value.characters,value.gamename,value.platformname, value.playerid, value.playertimeweekdaysfrom, value.playertimeweekdaysto, value.playertimeweekendsfrom, value.playertimeweekendsto, value.playertimezone)
            .subscribe( 
              user => this.response = user,
              error => console.log(error)
            ); 
       alert("PROFILE Successfully Updated to our Database "); 
       this._router.navigate(['about']);
    
  }

  //Sending Updated username to Firebase Usercount
  updateUser(name){

    this.name = name;

    this._firebase.addUser(name)
        .subscribe(
          user => console.log(user),
          error => console.log(error)
          );
    
  }
  
  //Updating User name under specific game
  
  updateuserGame(){
    
        this.gamename = this.game;
        console.log(this.gamename);
        this._firebase.updateuserinGame(this.gamename, this.name)
            .subscribe(
              user => this.Username = user,
              error => console.log(error)
              );
    
  }
  
  // Updating user Under specific platform
  updatePlatform(values){
     this.gamenameforplatform = values.gamename;
     this.usernameforplatform = values.name;
    this.Platform = values.platformname;
    
    this._firebase.updateUserinPlatform(this.gamenameforplatform, this.usernameforplatform, this.Platform)
        .subscribe(
          user => this.UserinPlatform = user,
          error => console.log(error)
          );
    
  }
  
  //Getting player profile on its Player Id
  viewProfile(value) {
      
      this.playerid = value.id;
      console.log(this.playerid);
      
      this._firebase.viewprofile(this.playerid)
            .subscribe(
                user => this.profileinfo = user,
                error => console.log(error)
                );
   
    console.log(this.profileinfo);   
  }

}
