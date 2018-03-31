import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayerListsComponent } from './lists.component';
import { playerListsRoute } from './lists.router';
import { PlayerListsService } from '../../../services/api/playerListsApi';

@NgModule({
    declarations: [PlayerListsComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(playerListsRoute)
    ],
    providers: [PlayerListsService]
})

export class PlayerListsModule {}
