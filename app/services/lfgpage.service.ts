import { Injectable } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Http} from '@angular/http';
import {last} from "rxjs/operator/last";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';


@Injectable()
export class LfgpageService {

  // Variable for Url to PSave Data in DB 
  url: string
  urldetails: string;
  
  //Variable -->URL for specific requests
  urlspecific: string;
  urlgetspecificrequest: string;
  
  
  //Variable to save request name in request
  urlforrequestname : string;
  
  
  //Varibale for delete request
  urldeleterequest : string;
  urldeleterequestfromplayerid: any;
  urldeleterequestdetails: any;

  constructor(private http: Http) { }
  
  saverequest(Playerid: any, Event: any, Name: any, Start: any, End: any, Team: any, Game: any, Description: any) {
      
        this.url = "https://gaming-community-9270c.firebaseio.com/request/" + Playerid + "/" + Name + ".json";
        
        const body = JSON.stringify({RequestName: Name, GameName: Game, TeamType: Team, EventType: Event, StartTime: Start, EndTime: End, DescriptionAboutEvent: Description})

        return this.http.put(this.url, body)
                .map(response => response.json());
  }

  //Get all Request
  allrequest() {
      
      return this.http.get("https://gaming-community-9270c.firebaseio.com/request/requestname.json")
                .map(response => response.json());
  }
    
  //Get Specific Request 
    specificrequest(gamename : string, playerid: any) {
        
        this.urlspecific = "https://gaming-community-9270c.firebaseio.com/request/" +playerid + "/" + gamename + ".json";

        return this.http.get(this.urlspecific)
             .map(response => response.json());
    }
    //Get Any Request by name 
    
    anyrequest(value: any) {
      
      this.urlgetspecificrequest ="https://gaming-community-9270c.firebaseio.com/request/requestdetails/" + value + ".json";
      
      return this.http.get(this.urlgetspecificrequest)
             .map(response => response.json());
      
    }
    
    //Check request with playerid and Name of request
    
    saveRequestname(value: any){
      
      this.urlforrequestname = "https://gaming-community-9270c.firebaseio.com/request/requestname/" + value +".json";
      
      const body = ({RequestName: value})
      
      return this.http.put(this.urlforrequestname, body)
          .map(response => response.json());
    }
    
    //saving request for users to view them 
    saverequestinrequest(Playerid: any, Event: any, Name: any, Start: any, End: any, Team: any, Game: any, Description: any) {
      
      this.urldetails = "https://gaming-community-9270c.firebaseio.com/request/requestdetails/" + Name + ".json";
        
        const body = JSON.stringify({RequestName: Name, GameName: Game, TeamType: Team, EventType: Event, StartTime: Start, EndTime: End, DescriptionAboutEvent: Description})

        return this.http.put(this.urldetails, body)
                .map(response => response.json());
      
    }
    
    //Deleting LFG request with specific playerid
    
    deleterequest(Name: string, Playerid: any){
      
      console.log(Name);
      this.urldeleterequest = "https://gaming-community-9270c.firebaseio.com/request/requestname/" + Name +".json";
      
      return this.http.delete(this.urldeleterequest)
            .map(response => response.json());
      
      
    }
    
    deleterequestfromplayerid(Name: string, Playerid: any) {
      
      console.log(Playerid);
      console.log(Name);
      
      this.urldeleterequestfromplayerid ="https://gaming-community-9270c.firebaseio.com/request/" + Playerid + "/" + Name + ".json";
      
      return this.http.delete(this.urldeleterequestfromplayerid)
          .map(response => response.json());
    }
    
    deletefromrequestDetails(Name: string) {
      
      this.urldeleterequestdetails ="https://gaming-community-9270c.firebaseio.com/request/requestdetails/" + Name + ".json";
      
      return this.http.delete(this.urldeleterequestdetails)
          .map(response => response.json());
    }
    
    
}
