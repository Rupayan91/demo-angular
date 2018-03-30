import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-auth',
    templateUrl: './post-auth.html',
    styleUrls: ['./post-auth.css']
})

export class PostAuthComponent implements OnInit {

    constructor(private route: Router) {    }
    ngOnInit() {
        console.log('hello');
        //this.route.navigate(['auth/home']);
    }
    itemLists: Array<Object> = [
        {
            'name': "Home",
            'clsName': "home"
        },
        {
            'name': "Profile",
            'clsName': "profile"
        },
        {
            'name': "List",
            'clsName': "list"
        },
        {
            'name': "Contact",
            'clsName': "cont"
        }
    ];

    routePage(name) {
        this.route.navigate(['auth/'+name]);
    }
}
