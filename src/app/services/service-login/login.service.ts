import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IResponse } from 'src/app/entity/response';
import { IUser } from 'src/app/entity/user';

@Injectable()

export class LoginService {
    url: string = 'http://10.0.2.125:8080/security/login'
    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    public login(user: IUser): Promise<IResponse> {
        return new Promise<IResponse>(resolve => {
            this.http.post<IResponse>(this.url, user).subscribe(response => {
                resolve(response as unknown as IResponse);
            }, err => {
                resolve(null);
            });
        });
    }
}