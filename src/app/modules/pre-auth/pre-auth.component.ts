import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { SideMenuComponent } from '../../../components/sidemenu/sidemenu.component';
@Component({
    selector: 'app-pre-auth',
    templateUrl: './pre-auth.html'
})

export class PreAuthComponent implements OnInit {

    constructor(private route: Router) {    }
    ngOnInit() {
        console.log('hello');
        this.route.navigate(['user/login']);
    }
}
