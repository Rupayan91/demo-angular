import { Component } from '@angular/core';
import { PlayerListsService } from '../../../services/api/playerListsApi';

@Component({
    selector: 'app-player-lists',
    templateUrl: './lists.html',
    styleUrls: ['./lists.css']
})

export class PlayerListsComponent {

    playerLists: any;
    constructor(private listsSvc: PlayerListsService) {
        this.getPlayers()
    }

    getPlayers() {
        this.listsSvc.getProfileLists().subscribe((res:any) => {
            console.log("Data :", res);
            this.playerLists = res.data;
        }, (err) => {
            console.log("Error ::", err);
        })
     }
}
