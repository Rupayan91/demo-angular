import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.router';
import { ChartService } from '../../../services/api/chartApi';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
    declarations: [HomeComponent],
    imports:[
        CommonModule,
        NgxChartsModule,
        RouterModule.forChild(homeRoutes)
    ],
    providers: [ChartService]
})

export class HomeModule {}
