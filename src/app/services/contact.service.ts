import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private API_CONTACT_URL = 'http://localhost:8000/api/contacts/1';
  constructor(private httpClient: HttpClient) {}

  async getContact(): Promise<any[] | null> {
    let data = null;
    try {
      const response = await this.httpClient
        .get(this.API_CONTACT_URL)
        .toPromise();
      //@ts-ignore
      data = await response;

      console.log(data);
      //@ts-ignore
      return data;
      //return data['hydra:member'];
    } catch (error) {
      return console.log('erreur, raison :'), error;
    }
  }
}
