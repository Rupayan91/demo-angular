import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PreAuthComponent } from './pre-auth.component';
import { preAuthRoutes } from './pre-auth.router';

@NgModule({
    declarations: [PreAuthComponent],
    imports:[
        CommonModule,
        //SideMenuModule,
        RouterModule.forChild(preAuthRoutes)
    ],
    providers: []
})

export class PreAuthModule {}
