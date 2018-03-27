import { Routes } from '@angular/router';
import { PostAuthComponent } from './post-auth.component';
export const authRoutes: Routes = [
    // {path: 'auth', loadChildren: './modules/post-auth/post-auth.module#PostAuthModule'}
    {path: '', component: PostAuthComponent},
    {path:'home',  loadChildren: './home/home.module#HomeModule'}
];
