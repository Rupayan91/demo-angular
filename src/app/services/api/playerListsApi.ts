import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpAdapterService } from '../adapter/httpAdapter';

@Injectable()

export class PlayerListsService {

    constructor(private httpSvc: HttpAdapterService) {}

    // Get chart Data functionalities
    getProfileLists() {

        let responseObj = {
            'status': 200,
            'responseMsg': '',
            'data': ''
        };
        return new Observable(observer => {
            this.httpSvc.getFromJson('playerLists').subscribe((res: any) => {
                    responseObj.responseMsg = "Successful";
                    responseObj.data = res.players;
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
