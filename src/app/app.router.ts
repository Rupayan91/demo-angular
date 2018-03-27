import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/guards/authguard.service';

export const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'auth', loadChildren: './modules/post-auth/post-auth.module#PostAuthModule'}
    // {path:'login', loadChildren: './modules/pre-auth/login/login.module#LoginModule'},
    // {path:'home',  loadChildren: './modules/post-auth/home/home.module#HomeModule'},
    // {path:'profile', loadChildren: './modules/post-auth/profile/profile.module#ProfileModule'}
];
