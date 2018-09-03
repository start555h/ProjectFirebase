import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [DataService]
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  coursecode: FormGroup;
  users: Object;
  userItem: Observable<any>;
  dataid: any;
  constructor(private authService: AuthService, private afDb: AngularFireDatabase,
    private ds: DataService
  ) {
    // this.userItem = afDb.object(`/users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();
    this.getIDcouse();
  }
  ngOnInit() {
  }
  addUser(data: NgForm) {
  console.log(data.value);
  this.afDb.list(`users/${this.authService.authInfo$.value.$uid}/cousecode`).push(data.value);
 }
  getIDcouse() {
   this.ds.getCouses()
   .subscribe(
     (data) => this.dataid = data,
     (error) => alert(error),
     () => console.log('success!')
   );

 }
}
