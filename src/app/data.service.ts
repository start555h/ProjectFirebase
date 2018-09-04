import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   // tslint:disable-next-line:max-line-length
  // api: 'https://apireg.herokuapp.com/datareg?backto=home&option=0&courseid=1003564&?coursecode=523101&acadyear=2561&semester=1&avs608470185=55';
 // tslint:disable-next-line:max-line-length
 //  `https://apireg.herokuapp.com/datareg?backto=home&option=0&courseid=1003564&coursecode=523101&acadyear=2561&semester=1&avs608470185=55`
 private courseid: string;
 constructor(private http: HttpClient, private af: AngularFireDatabase) {
 }
 getCouses(coursecode) {
   // tslint:disable-next-line:max-line-length
   return this.http.get('https://myapireg.herokuapp.com/getreg/' + coursecode)
   .map(res => res);
 }
}
