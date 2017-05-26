import { Injectable } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Http} from '@angular/http';
import {last} from "rxjs/operator/last";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService {

 // Variable used to set the path of database as per username  
  playeridupdate: any;
  url: string;

  // Variable used to set the path for member count
  member: string;
  urlmember: string;

//Variables used to set the name of user under specific game
  game : string;
  username: string;
  gameurl: string;
  
  //Varibales used to set the user under specific Platform of any game
  usernameforplatform: string;
  gamenameforplatform: string;
  platformname: string;
  urlforplatform: string;
  
  //Variables used to get profile Information 
  urlprofile: string;
  playerid:any
  

  constructor ( private _http: Http) { }

    setUser (name: string, age: number, characters: Array<any>,gamename: string, platformname: string, playerid: any, playertimeweekdaysfrom: string, playertimeweekdaysto: string, playertimeweekendsfrom: string, playertimeweekendsto: string, playertimezone: string ){
      this.playeridupdate = playerid;
      this.url= "https://gaming-community-9270c.firebaseio.com/user/" + this.playeridupdate + ".json";
      const body = JSON.stringify({name: name, age : age, characters: characters,gamename: gamename, platformname: platformname, playerid: playerid, playertimeweekdaysfrom: playertimeweekdaysfrom, playertimeweekdaysto: playertimeweekdaysto, playertimeweekendsfrom: playertimeweekendsfrom, playertimeweekendsto: playertimeweekendsto, playertimezone: playertimezone });

            return this._http.put(this.url, body)
                      .map(response => response.json());
                  
    }
    
    //Adding user to database for member count
    addUser (username: string) {
      
      this.member = username;
      this.urlmember = "https://gaming-community-9270c.firebaseio.com/usercount/" + this.member + ".json"
  
      const body = JSON.stringify({username: username})
      
      return this._http.put(this.urlmember, body)
              .map(response => response.json());
      
    }  
  
    //updating user under Specific name of Game
    
    updateuserinGame(gamename : string, name: string){
      
            console.log(gamename);
      
            if(gamename == 'Diablo 3'){
                this.game = 'Diablo 3';
                this.username = name;
              }
            else if(gamename == 'Destiny'){
                this.game = 'Destiny';
                this.username = name;
              }
            else if(gamename == 'World of Warcraft'){
                this.game = 'World of Warcraft';
                this.username = name;
              }
            else if(gamename == 'Left 4 Dead 2'){
                this.game = 'Left 4 Dead 2';
                this.username = name;
              }
      
                this.gameurl = "https://gaming-community-9270c.firebaseio.com/" + this.game + '/users' + "/" + this.username + ".json";
      
                const body = ({username: this.username});
      
                return this._http.put(this.gameurl, body)
                .map(response => response.json());
      
      
          }
    
    
    //updating User under specific platforms
    updateUserinPlatform(gamenameforplatform: string, usernameforplatform: string, platformname: string){
      
      console.log(gamenameforplatform);
      console.log(usernameforplatform);
      console.log(platformname);
      
      
                if(gamenameforplatform == 'Diablo 3' && platformname == 'PS3'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Diablo 3';
                  this.platformname = 'PS3';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'Diablo 3' && platformname == 'PS4'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Diablo 3';
                  this.platformname = 'PS4';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'Diablo 3' && platformname == 'XBox'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Diablo 3';
                  this.platformname = 'XBox';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'Diablo 3' && platformname == 'XB1'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Diablo 3';
                  this.platformname = 'XB1';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'Destiny' && platformname == 'PS3'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Destiny';
                  this.platformname = 'PS3';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'Destiny' && platformname == 'XB1'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Destiny';
                  this.platformname = 'XB1';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'Destiny' && platformname == 'PS4'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Destiny';
                  this.platformname = 'PS4';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'Destiny' && platformname == 'XBox'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Destiny';
                  this.platformname = 'XBox';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                 else if(gamenameforplatform == 'Left 4 Dead 2' && platformname == 'PC'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Left 4 Dead 2';
                  this.platformname = 'PC';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                
                 else if(gamenameforplatform == 'Left 4 Dead 2' && platformname == 'XBox'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'Left 4 Dead 2';
                  this.platformname = 'XBox';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
                else if(gamenameforplatform == 'World of Warcraft' && platformname == 'PC'){
                  this.usernameforplatform = usernameforplatform;
                  this.gamenameforplatform = 'World of Warcraft';
                  this.platformname = 'PC';
                  this.urlforplatform = "https://gaming-community-9270c.firebaseio.com/" + this.gamenameforplatform + "/platform" + "/" + this.platformname + "/" + this.usernameforplatform + ".json";
                }
      
        const body = ({username: this.usernameforplatform});
      
                return this._http.put(this.urlforplatform, body)
                  .map(response => response.json());
       
    }
    
    //viewing player profile by playerid
    viewprofile(playerid){
      
      this.playerid = playerid;
      console.log(this.playerid);
      this.urlprofile = "https://gaming-community-9270c.firebaseio.com/user/" + this.playerid + ".json";
      
      return this._http.get(this.urlprofile)
        .map(response => response.json());
      
    }
    
    

}
