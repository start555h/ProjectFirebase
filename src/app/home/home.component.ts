import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  coursecode: FormGroup;
  users: Object;
  userItem: Observable<any>;
  dataid: any;
  a: any;

  constructor(
    private authService: AuthService,
    private afDb: AngularFireDatabase,
    private ds: DataService
  ) {
    this.getIDcouse();
    // this.userItem = afDb.object(`/users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();
  }
  ngOnInit() {}
  addUser(dataid: NgForm) {
    console.log(dataid.value);
    this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode`)
      .push(dataid.value);
      console.log(' post success!' );
  }

  getIDcouse() {
    const coursecode = '523101';
    this.ds.getCouses(coursecode)
      .subscribe(
        data => (this.dataid = data),
        error => alert(error),
        () => console.log('successfull!')
      );
  }
}
