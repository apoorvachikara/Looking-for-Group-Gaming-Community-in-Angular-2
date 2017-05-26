import { Component, OnInit } from '@angular/core';

import {Auth} from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor (private auth: Auth) { }

  ngOnInit() {
  }

}
