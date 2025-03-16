import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _ammar: HttpClient) { }

  AddUser(data: any): Observable<any> {
    return this._ammar.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);


  }

  getAllUsers() {
    return this._ammar.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users");

  }




}
