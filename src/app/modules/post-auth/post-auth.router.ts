import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'auth', loadChildren: './modules/post-auth/post-auth.module#PostAuthModule'}
];
