import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameinfoService} from '../services/gameinfoservice/gameinfo.service';
import {RouterModule, Router} from '@angular/router';

import {Pipe, PipeTransform} from '@angular/core'
import {GamingPipe} from '../custompipe/gaming.pipe';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Auth} from '../auth.service';
import {UsercountService} from '../services/usercountforgame/usercount.service';
import {UserplatformService} from '../services/userplatformservice/userplatform.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [GameinfoService, UsercountService, GamingPipe, UserplatformService]
})
export class AboutComponent implements OnInit {
  //Variable for Left Game
  nameleft: string;
  platform_left:string;
  countleft: number;
  aboutleft: string;
  platformleft ;
  characterleft;
  usercountleft: FirebaseListObservable<any>
  userpcleft: FirebaseListObservable<any>;
  userxboxleft: FirebaseListObservable<any>;
  
  
  //Variable for Destiny Game
  platformdestiny ;
  characterdestiny;
  aboutdestiny: string;
  usercountdestiny: FirebaseListObservable<any>
  
   userps3destiny: FirebaseListObservable<any>;
  userps4destiny: FirebaseListObservable<any>;
   userxboxdestiny: FirebaseListObservable<any>;
  userxb1destiny: FirebaseListObservable<any>;
  
  //Variable for Diablo Game
  platformdiablo ;
  characterdiablo;
  aboutdiablo: string;
  usercountdiablo: FirebaseListObservable<any>;
  
  userps3diablo: FirebaseListObservable<any>;
  userps4diablo: FirebaseListObservable<any>;
  userxboxdiablo: FirebaseListObservable<any>;
  userxb1diablo: FirebaseListObservable<any>;
  
  
  //Variable for War Game
  platformwar;
  characterwar;
  aboutwar: string;
  
  usercountforWar: FirebaseListObservable<any>
  userpcwar: FirebaseListObservable<any>

  constructor (private auth:Auth, private gameinfo: GameinfoService, private usercount: UsercountService, private userplatform: UserplatformService, private router: Router){}

  ngOnInit() {
  }
  
  // Get Plaform and Characters for Left Game Using Services of GameInfo
  getPlatformforleft () {
    
    this.platformleft = this.gameinfo.getPlatformleft();
  
  }
  
  getCharactersforleft() {
    this.characterleft = this.gameinfo.getCharactersleft();
    
  }
  
  left4dead2(){
    this.aboutleft = this.gameinfo.aboutLeft();
  }
  
  getPCUserforleft(){
    this.userplatform.getPCuserleft()
      .subscribe(
        user => this.userpcleft = user,
        error => console.log(error)
        );
        
  }
  
  getXboxUserforleft(){
    this.userplatform.getXBOXuserleft()
      .subscribe(
        user => this.userxboxleft = user,
        error => console.log(error)
        );
  }

  //Get Platfrom and Characters for Destiny using Services of GameInfo
  
   getPlatformforDestiny () {
    
    this.platformdestiny = this.gameinfo.getPlatformDestiny();

  }
  
  getCharactersforDestiny() {
    this.characterdestiny = this.gameinfo.getCharactersDestiny();
  }
  
  destiny() {
    
    this.aboutdestiny = this.gameinfo.aboutDestiny();
    
  }
  
  getPS3UserforDestiny(){
    
    this.userplatform.getPS3userdestiny()
      .subscribe(
        user => this.userps3destiny = user,
        error => console.log(error)
        );
  }
  
  getPS4UserforDestiny(){
    
    this.userplatform.getPS4userdestiny()
      .subscribe(
        user => this.userps4destiny = user,
        error => console.log(error)
        );
    
  }
  
  getXB1UserforDestiny(){
    
    this.userplatform.getXB1userdestiny()
      .subscribe(
        user => this.userxb1destiny = user,
        error => console.log(error)
        );
        
  }
  
  getXBoxUserforDestiny(){
    
    this.userplatform.getXBoxuserdestiny()
      .subscribe(
        user => this.userxboxdestiny = user,
        error => console.log(error)
        );
  }
  
  //Get Platform and Characters for Diablo Using service of Gameinfo
  
   getPlatformforDiablo () {
    
    this.platformdiablo = this.gameinfo.getPlatformDiablo();
    console.log(this.platformleft);
  }
  
  getCharactersforDiablo() {
    this.characterdiablo = this.gameinfo.getCharactersDiablo();
  }
  
  dibalo(){
    this.aboutdiablo = this.gameinfo.aboutDiablo();
  }
  
  getPS3UserforDiablo() {
    
     this.userplatform.getPS3userdiablo()
      .subscribe(
        user => this.userps3diablo = user,
        error => console.log(error)
        );
  }
  getPS4UserforDiablo() {
    
    this.userplatform.getPS4userdiablo()
      .subscribe(
        user => this.userps4diablo = user,
        error => console.log(error)
        );
        console.log(this.userps4diablo);
  }
  
  getXBoxUserforDiablo() {
    
    this.userplatform.getXBoxuserdiablo()
      .subscribe(
        user => this.userxboxdiablo = user,
        error => console.log(error)
        );
  }
  
  getXB1UserforDiablo() {
    
    this.userplatform.getXB1userdiablo()
      .subscribe(
        user => this.userxb1diablo = user,
        error => console.log(error)
        );
        console.log(this.userxb1diablo);
  }

  
  //Get Platform and Characters for World of War Using service of Gameinfo
  
   getPlatformforWar () {
    
    this.platformwar = this.gameinfo.getPlatformWar();
    console.log(this.platformleft);
  }
  
  getCharactersforWar() {
    this.characterwar = this.gameinfo.getCharactersWar();
  }
  
  war(){
    this.aboutwar = this.gameinfo.aboutWar();
    console.log(this.aboutwar);
  }
  
  getPCUserforWar() {
    
    this.userplatform.getPCforWar()
      .subscribe(
        user => this.userpcwar = user,
        error => console.log(error)
        );
    
  }

  //Getting the user Count for Left 4 Dead 2
  
  getUserforleft(){
    
      this.usercount.getuser4left()
          .subscribe(
            user => this.usercountleft = user,
            error => console.log(error)
            );
        console.log(this.usercountleft);
        console.log(this.countleft);
    
  }

  //Geting user information for game destiny
  
  getUserforDestiny(){
    
    this.usercount.getuser4destiny()
          .subscribe(
            user => this.usercountdestiny = user,
            error => console.log()
            );
    
  }
  
  //Getting user for Diablo game
  
  getUserforDiabalo(){
    
    this.usercount.getuser4diablo()
      .subscribe(
        user => this.usercountdiablo = user,
        error => console.log(error)
        );
    
  }
  
  //Getting user for War Game
  
  getUserforWar() {
    
    this.usercount.getuser4war()
        .subscribe(
          user => this.usercountforWar = user,
          error => console.log(error)
          );
          
          console.log(this.usercountforWar);
          
  }
  
  //Adding Users In Different Game
  //Adding Users in Left 4 Dead 2

  AddmeinLeft(value) {

    console.log(value);
    this.userplatform.addmeinleft(value.name , value.platform)
      .subscribe(
        user => console.log(user),
        error => console.log(error)
        );
      alert("Successfully Saved to our Database");
       this.router.navigate(['/']);
    
  }
  
  Addmeuserleft(value) {
    
    console.log(value);
    this.userplatform.addmeuserleft(value.name)
            .subscribe(
          user => console.log(user),
          error=> console.log(error)
            );
  }
  
  //Adding Users in Destiny
  AddmeinDestiny(value) {
    
    this.userplatform.addmeinDestiny(value.name, value.platform)
      .subscribe(
        user => console.log(user),
        error =>console.log(error)
        );
      alert("Successfully Saved to our Database");
       this.router.navigate(['/']);
  }
  
  AddmeuserDestiny(value) {
    
    this.userplatform.addmeuserDestiny(value.name)
          .subscribe(
            user => console.log(user),
            error => console.log(error)
            );
  }
  
  //Adding Users in Diablo
  
  AddmeinDiablo(value) {
    
    console.log(value);
    
    this.userplatform.addmeinDiablo(value.name, value.platform)
      .subscribe(
        user => console.log(user),
        error =>console.log(error)
        );
      
  }
  
  AddmeuserDiablo(value) {
    
    
    this.userplatform.adduserDiablo(value.name)
      .subscribe(
        user => console.log(user),
        error =>console.log(error)
        );
      alert("Successfully Saved to our Database");
       this.router.navigate(['/']);
    
  }

  AddmeinWar(value) {
    console.log(value);
    this.userplatform.addmeinWar(value.name, value.platform)
      .subscribe(
        user => console.log(user),
        error =>console.log(error)
        );
      alert("Successfully Saved to our Database");
       this.router.navigate(['/']);
  }

}
