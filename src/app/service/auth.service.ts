import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExtractData} from "./extract-data";
import {map} from "rxjs/operators";
import {Account} from "../class/account";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:7070/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  Login(account: Account): Observable<any> {
    return this.http.get(this.url + "token?username="+account.username+"&password="+account.password).pipe(map(ExtractData.extractData));
  }

  getProjects(token: string): Observable<any> {
    return this.http.get(this.url + "project?token="+token).pipe(map(ExtractData.extractData));
  }

}
