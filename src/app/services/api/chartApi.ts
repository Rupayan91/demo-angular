import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpAdapterService } from '../adapter/httpAdapter';

@Injectable()

export class ChartService {

    constructor(private httpSvc: HttpAdapterService) {}

    // Get chart Data functionalities
    getChartData() {

        let responseObj = {
            'status': 200,
            'responseMsg': '',
            'data': ''
        };
        return new Observable(observer => {
            this.httpSvc.getFromJson('pichart_data').subscribe((res: any) => {
                    responseObj.responseMsg = "Successful";
                    responseObj.data = res.chatData;
                    observer.next(responseObj);
                    observer.complete();
            }, (err: any) => {
                responseObj.status = 401;
                responseObj.responseMsg = "Something wrong. Please try again";
                observer.error(responseObj);
                observer.complete();
            })

        });
    }


}
