import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  coursecode: '';
  users: Object;
  userItem: Observable<any>;
  dataid: any;
  constructor(
    private authService: AuthService,
    private afDb: AngularFireDatabase,
    private ds: DataService,
    public dialogRef: MatDialogRef<HomeComponent>
  ) { 
    if (this.coursecode === '') {
      this.getIDcouse();
      }
  }

  ngOnInit() {
  }
  addUser(dataid: NgForm) {
    console.log(dataid.value);
    this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode`)
      .push(dataid.value);
      console.log(' post success!' );
      this.dialogRef.close();
  }
  getIDcouse() {
    this.ds.getCouses(this.coursecode)
      .subscribe(
        data => (this.dataid = data),
        error => alert(error),
        () => console.log('successfull!')
      );
  }

}
