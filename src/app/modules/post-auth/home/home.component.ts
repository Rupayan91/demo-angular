import { Component } from '@angular/core';
import { SideMenuComponent } from '../../../components/sidemenu/sidemenu.component';
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent {

    itemLists: Array<Object> = [
        {
            'name': "Home",
            'clsName': "home"
        },
        {
            'name': "List",
            'clsName': "list"
        },
        {
            'name': "Contact",
            'clsName': "cont"
        }
    ]

    //itemLists: Array<Number> = [10, 12, 16];


}
