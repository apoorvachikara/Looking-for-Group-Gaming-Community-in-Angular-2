import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import {Auth} from './auth.service';

import { LogoutComponent } from './logout/logout.component';

import {GameinfoService} from './services/gameinfoservice/gameinfo.service';
import {routing, appRoutingProviders} from './app.routing';

import {AngularFireModule} from 'angularfire2';

import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { GamingPipe } from './custompipe/gaming.pipe';
import { LfgComponent } from './lfg/lfg.component';


// Put your Firebase configuration below
export const firebaseconfig = {
    apiKey: "******************************",
    authDomain: "*******************************",
    databaseURL: "https://gaming-community-9270c.firebaseio.com",
    storageBucket: "**********************",
    messagingSenderId: "**********************"
};


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LogoutComponent,
    ProfileComponent,
    UpdateprofileComponent,
    GamingPipe,
    LfgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule, 
    routing,
    AngularFireModule.initializeApp(firebaseconfig)
    
  ],
  providers: [Auth, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
