import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient, private af: AngularFireDatabase) {
 }
 getCouses(coursecode) {
   return this.http.get('http://35.240.228.76/getcourse/' + coursecode)
   .map(res => res);
 }
}
