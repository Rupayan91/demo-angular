import { Routes } from '@angular/router';
import { PreAuthComponent } from './pre-auth.component';
export const preAuthRoutes: Routes = [
    // {path: 'auth', loadChildren: './modules/post-auth/post-auth.module#PostAuthModule'}
    {path: '', component: PreAuthComponent},
    {path:'login',  loadChildren: './login/login.module#LoginModule'}
];
