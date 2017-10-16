import { AngularFireAuth } from 'angularfire2/auth';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private afAuth: AngularFireAuth) {  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
