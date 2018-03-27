import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { profileRoutes } from './profile.router';

@NgModule({
    declarations: [ProfileComponent],
    imports:[
        RouterModule.forChild(profileRoutes)
    ],
    providers: []
})

export class ProfileModule {}
