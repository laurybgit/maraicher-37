import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_PRODUCTS_URL = 'http://localhost:8000/api/products';

  constructor(private httpClient: HttpClient) {
    //this.getProducts();
  }

  async getProducts(): Promise<Product[] | null> {
    let data = null;
    try {
      const response = await this.httpClient
        .get(this.API_PRODUCTS_URL)
        .toPromise();
      //@ts-ignore
      data = await response;
      //@ts-ignore
      return data['hydra:member'];
    } catch (error) {
      return console.log('erreur, raison :'), error;
    }
  }
}
