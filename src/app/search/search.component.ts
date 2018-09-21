import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
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
  j:any;
  i:any;

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
  addUser(dataid,i,j) {
  
    console.log(this.dataid.Coursecode + ' ' + this.dataid.NameThai+ ' ' +dataid.Credit+ ' ' +dataid.Datareg[i].Sec);
    this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}`)
      .push(dataid.Coursecode);

    this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/NameThai`)
      .push(dataid.NameThai);

    this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/Credit`)
      .push(dataid.Credit);

      this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/Teacher`)
      .push(dataid.Datareg[i].T);

      this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/Mid`)
      .push(dataid.Datareg[i].Mid);

      this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/Final`)
      .push(dataid.Datareg[i].Final);

      this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/DayTime`)
      .push(dataid.Datareg[i].DayTime[0]);

      this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/DayTime`)
      .push(dataid.Datareg[i].DayTime[1]);

      this.afDb
      .list(`users/${this.authService.authInfo$.value.$uid}/cousecode/${this.coursecode}/Sec`)
      .push(dataid.Datareg[i].Sec);

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
