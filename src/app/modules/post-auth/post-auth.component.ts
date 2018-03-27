import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { SideMenuComponent } from '../../../components/sidemenu/sidemenu.component';
@Component({
    selector: 'app-post-auth',
    templateUrl: './post-auth.html'
})

export class PostAuthComponent implements OnInit {

    constructor(private route: Router) {    }
    ngOnInit() {
        console.log('hello');
        this.route.navigate(['auth/home']);
    }
}
