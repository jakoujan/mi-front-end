import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'src/app/entity/response';
import { IRecognize } from '../entity/recognize';

@Injectable()
export class VisionService {
  url: string = 'http://10.0.2.125:8080/vision/recognize'

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