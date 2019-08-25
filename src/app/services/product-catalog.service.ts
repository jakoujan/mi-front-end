import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'src/app/entity/response';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  url: string = 'http://10.0.2.125:8080/product/catalog'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public catalog(): Promise<IResponse> {
    return new Promise<IResponse>(resolve => {
      this.http.get<IResponse>(this.url).subscribe(response => {
        resolve(response as unknown as IResponse);
      }, err => {
        resolve(null);
      });
    });
  }
}
