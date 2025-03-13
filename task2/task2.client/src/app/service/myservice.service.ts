import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private ammar: HttpClient) { }

  getCategory() {
    return this.ammar.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");

  }

  getproduct(productID: any) {
    return this.ammar.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");

  }
  private products = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';

  getProductById(productId: string): Observable<any> {
    return this.ammar.get(`${this.products}/${productId}`);
   
  }
 


}
