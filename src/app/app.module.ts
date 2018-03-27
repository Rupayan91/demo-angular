import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.router';
import { HttpClientModule } from '@angular/common/http';
import { HttpAdapterService } from './services/adapter/httpAdapter';
import { AuthGuardService } from './services/guards/authguard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //SideMenuModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )
  ],
  providers: [HttpAdapterService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
