import { Component } from '@angular/core';
import { SideMenuComponent } from '../../../components/sidemenu/sidemenu.component';
import { ChartService } from '../../../services/api/chartApi';
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent {

    chatValue: any;
    view: any[] = [700, 400];
    pieColor: any = { "domain": ""};
    pieData: any;
    constructor(private chart: ChartService) {
        chart.getChartData().subscribe((res: any) => {
            console.log('Res ::', res);
            this.chatValue = res.data;
            this.pieColor.domain = this.chatValue.color;
            this.pieData = this.chatValue.data;
            Object.assign(this.pieData, '');
        }, (err) => {
            console.log("Error", err);
        })
    }

    renderChart() {

    }
}
