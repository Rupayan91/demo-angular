import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../../models/login';
import { LoginService } from '../../../services/api/loginApi';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent {


    constructor(private loginSvc: LoginService, private route: Router) {

    }

    // Submit data for login
    onSubmit(formData) {
        this.loginSvc.doLogin(formData.value).subscribe((res: any) => {
            if(res.status == 200) {
                localStorage.setItem('isLoggedIn', 'Yes');
                this.route.navigate(['home']);
            } else {
                alert(res.responseMsg);
            }
        }, (error: any) => {
            console.log('error ::-', error)
        })
    }

}
