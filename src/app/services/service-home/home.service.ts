import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRecognize } from 'src/app/entity/recognize';
import { IResponse } from 'src/app/entity/response';
import { environment } from 'src/environments/environment';

@Injectable()

export class HomeService {
    url:string = environment.url + '/security/visionService'
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    constructor(private http: HttpClient){

    }
    sendImage(recognize:IRecognize):Promise<IResponse>{
        return new Promise<IResponse>(resolve => {
            this.http.post<IResponse>(this.url, recognize).subscribe(response => {
                resolve(response as unknown as IResponse);
            }, err => {
                resolve(null);
            });
        });
    }
    
}