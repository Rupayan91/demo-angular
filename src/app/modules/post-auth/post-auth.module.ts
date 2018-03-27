import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostAuthComponent } from './post-auth.component';
import { authRoutes } from './post-auth.router';
// import { SideMenuComponent } from '../../../components/sidemenu/sidemenu.component';
@NgModule({
    declarations: [PostAuthComponent],
    imports:[
        CommonModule,
        //SideMenuModule,
        RouterModule.forChild(authRoutes)
    ],
    providers: []
})

export class PostAuthModule {}
