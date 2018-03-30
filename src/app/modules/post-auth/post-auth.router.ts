import { Routes } from '@angular/router';
import { PostAuthComponent } from './post-auth.component';
export const authRoutes: Routes = [
    // {path: 'auth', loadChildren: './modules/post-auth/post-auth.module#PostAuthModule'}
    {
        path: '', component: PostAuthComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }
        ]
    }
    //{path:'home',  loadChildren: './home/home.module#HomeModule'}
];
