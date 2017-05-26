import { Component, OnInit } from '@angular/core';
import {LfgpageService} from '../services/lfgpage.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {GamingPipe} from '../custompipe/gaming.pipe';
import {Auth} from '../auth.service';

import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-lfg',
  templateUrl: './lfg.component.html',
  styleUrls: ['./lfg.component.css'],
  providers: [LfgpageService]
})
export class LfgComponent implements OnInit {

  //Varibales Defined to take response from DB for all Requests, Specific Requests
  response: FirebaseListObservable<any>;  
  request: FirebaseListObservable<any>;
  specificrequest: FirebaseListObservable<any>
  viewbyname: FirebaseListObservable <any>;
  

  constructor( private lfg: LfgpageService, private auth : Auth, private router: Router) { }

  ngOnInit() {
  }
  
  //Save request to database 
  saveRequest(value) {
    
   this.lfg.saverequest(value.playerid, value.Event, value.Name, value.Start, value.End, value.Team, value.Game, value.Description)
            .subscribe(
              user => this.response = user,
              error => console.log(error)
              );
        alert(" Saved to Our Database Thanks!");
        this.router.navigate["/lfg"];
    
  }
  
  
  //get all request with database
  allRequest() {
  
      this.lfg.allrequest()
          .subscribe(
            user => this.request = user,
            error => console.log(error)
            );
          
  }
  
  //get request content with specific name
  specificRequest(value) {
    
    this.lfg.specificrequest(value.gamename, value.playerid)
        .subscribe(
          user => this.specificrequest = user,
          error => console.log(error)
          );
  }

  //saving the request name to db
  saverequestname(value){
    
    console.log(value.Name);
    this.lfg.saveRequestname(value.Name)
        .subscribe(
          user => console.log(user),
          error => console.log(error)
          );
          
          
  }
  
  //saving the request information for users to view by name
  
  saveRequestinrequest(value : any) {
      
      this.lfg.saverequestinrequest(value.playerid, value.Event, value.Name, value.Start, value.End, value.Team, value.Game, value.Description)
            .subscribe(
              user => console.log(user),
              error => console.log(error)
              );      
    }
    
  //View any request by name
  anyRequest(value) {
    
    this.lfg.anyrequest(value.gamename)
        .subscribe(
          user => this.viewbyname = user,
          error => console.log(error)
          );
  }
  
  //delete request by specific playerid
  
  deleteRequest(value) {
    
    console.log(value);
    this.lfg.deleterequest(value.gamename, value.playerid)
        .subscribe(
          user => console.log(user),
          error => console.log(error)
          );
  }
  
  deleteRequestfromplayerid(value) {
    
    console.log(value);
    this.lfg.deleterequestfromplayerid(value.gamename, value.playerid)
        .subscribe(
          user => console.log(user),
          error => console.log(error)
          );
  }
  
  deletefromrequestdetails(value) {
    
  this.lfg.deletefromrequestDetails(value.gamename)
        .subscribe(
          user => console.log(user),
          error => console.log(error)
          );
  }
}
