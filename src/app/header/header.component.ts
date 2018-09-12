import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userItem: Observable<any>;
  constructor(private authService: AuthService, private afDb: AngularFireDatabase,private router: Router) {
    this.userItem = afDb.object(`users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();
  }

  ngOnInit() {}

  onClickSignOut() {
    console.log('signOut');
    this.authService.logout();
  }

}
