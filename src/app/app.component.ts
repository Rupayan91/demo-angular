import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private route: Router) {    }

    // Call ngOnInit just after constructor got loaded
    ngOnInit() {
        let isLogin = localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : 'No';
        if(isLogin == 'Yes') {
            this.route.navigate(['auth']);
        } else {
            this.route.navigate(['user']);
        }
    }

}
