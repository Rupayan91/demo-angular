import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.router';

@NgModule({
    declarations: [HomeComponent],
    imports:[
        CommonModule,
        //SideMenuModule,
        RouterModule.forChild(homeRoutes)
    ],
    providers: []
})

export class HomeModule {}
