import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'clients',
        component: ClientsComponent
    }, {
        path: 'memberships',
        component: MembershipsComponent
    }
];
