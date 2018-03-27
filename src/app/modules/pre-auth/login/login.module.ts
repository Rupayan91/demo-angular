import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loginRoutes} from './login.router';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/api/loginApi';

@NgModule({
    declarations: [LoginComponent],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild(loginRoutes)
    ],
    providers: [LoginService],
})

export class LoginModule { }
