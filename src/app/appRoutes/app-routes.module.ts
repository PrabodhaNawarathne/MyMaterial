import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route, Router } from '@angular/router';
import { LoginComponent } from '../appComponents/login/login.component';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../appComponents/dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {        
        path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ],
    declarations: []
})
export class AppRouterModule {}