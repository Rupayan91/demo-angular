import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class HttpAdapterService {

    constructor(private http:HttpClient) {}

    // Get response from local json file
    getFromJson(fileName) {
        return new Observable(observer => {
            this.http.get('../../../assets/local/'+fileName+'.json').subscribe(data => {
                observer.next(data);
                observer.complete();
            }, err => {
                observer.error(err);
                observer.complete();
            })
        });
    }

}
