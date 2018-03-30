import { Component } from '@angular/core';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.html',
    styleUrls: ['./sidemenu.css']
})

export class SideMenuComponent {

    toggleBtn() {
        document.getElementById('sidemenu').classList.toggle('active');
    }
}
