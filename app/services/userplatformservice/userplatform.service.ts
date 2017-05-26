import { Injectable } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Http} from '@angular/http';
import {last} from "rxjs/operator/last";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';

@Injectable()
export class UserplatformService {

    //Varibales for Left
    urlleft: string;
    urlleft1: string;
    
    //Variables for Destiny
    urldestiny: string;
    urldestiny1: string;
    
    //VAriable for Diablo
    urldiablo: string;
    urldiablo1 : string;
    
    //VAriable for World OF WarCraft
    urlwar: string;
    
    
  constructor(private _http: Http) { }
  
  //Getting Users for Plaform PC LEFT 2 FOR DEAD 4
  
  getPCuserleft(){
      
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Left 4 Dead 2/platform/PC.json")
            .map(response => response.json());
      
  }
  
  getXBOXuserleft() {
      
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Left 4 Dead 2/platform/XBox.json")
            .map(response => response.json());
      
  }
  
  //Getting Users for Differenr Platform... Game : Destiny
  
  getPS3userdestiny() {
      
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Destiny/platform/PS3.json")
            .map(response => response.json());
      
  }
  getPS4userdestiny() {
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Destiny/platform/PS4.json")
            .map(response => response.json());
      
  }
  getXB1userdestiny() { 
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Destiny/platform/XB1.json")
            .map(response => response.json());
      
  }
  getXBoxuserdestiny() {
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Destiny/platform/XBox.json")
            .map(response => response.json());
       
  }
  
  //Getting Users for Different Platform... Game : Diablo
  
  getPS4userdiablo() {
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Diablo 3/platform/PS4.json")
            .map(response => response.json());
  }
  getPS3userdiablo() {
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Diablo 3/platform/PS3.json")
            .map(response => response.json());
  }
  getXBoxuserdiablo() {
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Diablo 3/platform/XBox.json")
            .map(response => response.json());
  }
  getXB1userdiablo() {
      return this._http.get("https://gaming-community-9270c.firebaseio.com/Diablo 3/platform/XB1.json")
            .map(response => response.json());
  }
  
  //Getting Users for Different Platform... Game : World of Walrcraft

  getPCforWar() {
      
      return this._http.get("https://gaming-community-9270c.firebaseio.com/World of Warcraft/platform/PC.json")
            .map(reponse => reponse.json());
  }
  
  //Adding Users to Games Platform
  //Adding User to Left
  
  addmeinleft(name: string, platform: string) {
      
      console.log(name);
      console.log(platform);
      
      this.urlleft = "https://gaming-community-9270c.firebaseio.com/Left 4 Dead 2/platform/" + platform + "/" + name + ".json"
      
      const body =({username : name})
      
     return this._http.put(this.urlleft, body)
            .map(response => response.json());
  }
  
  addmeuserleft(name : string){
      
      console.log(name);
      
      this.urlleft1 = "https://gaming-community-9270c.firebaseio.com/Left 4 Dead 2/users/" + name + ".json" 
       const body = ({username: name})
       
       return this._http.put(this.urlleft1, body)
            .map(response => response.json());
  }
  
  //Adding User to Destiny
  addmeinDestiny (name: string, platform: string) {
      
      this.urldestiny = "https://gaming-community-9270c.firebaseio.com/Destiny/platform/" + platform + "/" + name + ".json"
      const body = ({username : name}) 
      
      return this._http.put(this.urldestiny, body)
            .map(response => response.json());
      
      
  }
  addmeuserDestiny (name : string) {
      
      this.urldestiny1 = "https://gaming-community-9270c.firebaseio.com/Destiny/users/" + name + ".json";
      const body = ({username :name})
      
      return this._http.put(this.urldestiny1, body)
            .map(response => response.json());
      
  }
  
  //Adding user to Diablo
  addmeinDiablo (name: string, platform: string) {
      
      this.urldiablo = "https://gaming-community-9270c.firebaseio.com/Diablo 3/platform/" + platform + "/" + name + ".json"
      const body = ({username : name}) 
      
      return this._http.put(this.urldiablo, body)
            .map(response => response.json()); 
  }
  
  adduserDiablo(name: string) {
      
      this.urldiablo1 = "https://gaming-community-9270c.firebaseio.com/Diablo 3/users/" + name + ".json"
      const body = ({username : name}) 
      
      return this._http.put(this.urldiablo1, body)
            .map(response => response.json()); 
  }
  
  addmeinWar (name: string, platform: string) {
      
      this.urlwar = "https://gaming-community-9270c.firebaseio.com/World of Warcraft/platform/" + platform + "/" + name + ".json"
      const body = ({username : name}) 
      
      return this._http.put(this.urlwar, body)
            .map(response => response.json());
      
  }

}
