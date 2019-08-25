import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/service-login/login.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;
    result: any

    constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {

    }

    ngOnInit() {
        this.buildForm()


    }

    buildForm() {
        this.formLogin = this.fb.group({
            user: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }
    index() {
        this.loginService.login({ user: this.formLogin.get('user').value, password: this.formLogin.get('password').value }).then((response) => {
            console.log("Ejecutando", response);
            this.router.navigate(['/home'])
        })

    }
}