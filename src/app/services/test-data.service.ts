import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule, HttpRequest } from '@angular/common/http';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(
    private http: HttpClient,
  ) { }

  getHttpOptionHeader() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let options = { headers: headers };
    return options;
  }

  getConfig() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/");
  }

  getUserDetails(user_id: string) {
    const params = {'userid': user_id};
    return this.http.get("https://jsonplaceholder.typicode.com/users/",{params});
  }
}
