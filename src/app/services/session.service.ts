import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'src/app/entity/response';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url: string = environment.url + '/customer/session'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public session(): Promise<IResponse> {
    return new Promise<IResponse>(resolve => {
      this.http.get<IResponse>(this.url).subscribe(response => { 
        resolve(response as unknown as IResponse);
      }, err => {
        resolve(null);
      });
    });
  }
}
