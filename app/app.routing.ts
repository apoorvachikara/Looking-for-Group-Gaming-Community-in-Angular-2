import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {UpdateprofileComponent} from './updateprofile/updateprofile.component';
import {LfgComponent} from './lfg/lfg.component';


//Variables for routes, Setting route Path

const appRoutes: Routes= [
   {
        path: '',
        component: AboutComponent
      },
      
        {
        path: 'about',
        component: AboutComponent
      },
      
       {
        path: 'logout',
        component: LogoutComponent
      },
      
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'updateprofile',
        component: UpdateprofileComponent
      },
      {
        path: 'lfg',
        component: LfgComponent
      }
      
      
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);