import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpAdapterService } from '../adapter/httpAdapter';

@Injectable()

export class LoginService {

    constructor(private httpSvc: HttpAdapterService) {}

    // Login functionalities with static data checking
    doLogin(data) {
        let isValid     = false;
        let responseObj = {
            'status': 200,
            'responseMsg': ''
        };
        return new Observable(observer => {
            this.httpSvc.getFromJson('login').subscribe((res: any) => {
                for(let item of res.credentials) {
                    if(item.email == data.email && item.password == data.password) {
                        isValid = true;
                        responseObj.responseMsg = "Login Successful";
                        break;
                    }
                }
                if(isValid) {
                    observer.next(responseObj);
                    observer.complete();
                } else {
                    responseObj.status = 201;
                    responseObj.responseMsg = "Invalid Credentials";
                    observer.next(responseObj);
                    observer.complete();
                }
            }, (err: any) => {
                responseObj.status = 401;
                responseObj.responseMsg = "Something wrong. Please try again";
                observer.error(responseObj);
                observer.complete();
            })

        });
    }


}
