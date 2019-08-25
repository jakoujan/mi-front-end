import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class LoginService {
    url:string = 'http://10.0.2.125:8080/security/login'
    constructor(private http: HttpClient){}
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    }  
    public logIn(){
        return this.http.post(this.url,{user: '', password: ''})
        .pipe(map((res: Response)=> {
           return res.json()
        }))
    }
}