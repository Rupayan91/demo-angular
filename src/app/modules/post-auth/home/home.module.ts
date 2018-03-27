import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.router';
import { SideMenuComponent } from '../../../components/sidemenu/sidemenu.component';
@NgModule({
    declarations: [HomeComponent,SideMenuComponent],
    imports:[
        CommonModule,
        //SideMenuModule,
        RouterModule.forChild(homeRoutes)
    ],
    providers: []
})

export class HomeModule {}
