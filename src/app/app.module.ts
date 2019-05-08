import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './appRoutes/app-routes.module';
import { appMaterialModule } from './appMaterial/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { LoginComponent } from './appComponents/login/login.component';
import { DashboardComponent } from './appComponents/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    appMaterialModule,
    ReactiveFormsModule,
    ShowHidePasswordModule.forRoot(),
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAk9n1KR2G9gLzCyXpBDf00ZF2zF8cn5Yo'}),
    NgImageSliderModule,
  ],
  providers: [
    GoogleMapsAPIWrapper,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
