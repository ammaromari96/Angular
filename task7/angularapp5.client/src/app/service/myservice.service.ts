import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }


  getVouchers() {
    return this._http.get("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");
  }


  postVouchers(data: any) {
    return this._http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data);
  }


  editVouchers(data: any , id :any) {
    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data);
  }



}
