import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SellingPointsService {
  private API_SELLING_POINTS_URL = 'http://localhost:8000/api/selling_points';

  constructor(private httpClient: HttpClient) {}

  // uniformiser les retours du service. Exemple : renvoyer tjs un objet (propriété success : true/false, propriété data: data ou null)
  async getSellingPoints(): Promise<void[] | any> {
    let data: any = null;
    try {
      const response = await this.httpClient
        .get(this.API_SELLING_POINTS_URL)
        .toPromise();
      //@ts-ignore
      data = await response;
      if (data['hydra:member']) {
        return data['hydra:member'];
      } else {
        return data;
      }
    } catch (error) {
      return console.log('erreur, raison :'), error;
    }
  }
}
