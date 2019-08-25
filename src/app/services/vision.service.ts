import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'src/app/entity/response';
import { IRecognize } from '../entity/recognize';
import { environment } from 'src/environments/environment';

@Injectable()
export class VisionService {
  url: string = environment.url + '/vision/recognize'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public recognize(recognize: IRecognize): Promise<IResponse> {
    return new Promise<IResponse>(resolve => {
      this.http.post<IResponse>(this.url, recognize).subscribe(response => { 
        resolve(response as unknown as IResponse);
      }, err => {
        resolve(null);
      });
    });
  }
}