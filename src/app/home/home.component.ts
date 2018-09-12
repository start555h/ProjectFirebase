import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  users: Object;
  userItem: Observable<any>;
 
  constructor(
    private md: MatDialog
  ) {
  
    // this.userItem = afDb.object(`/users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();
  }
  ngOnInit() {}
  openDialog() {
    const dialogRef = this.md.open(SearchComponent,{
      height: '700px',
      width: '900px',
    });
    
    dialogRef.afterClosed();
  }
}


