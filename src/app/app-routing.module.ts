import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', loadChildren: './modules/landing/landing.module#LandingModule' },
    { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'client', loadChildren: './modules/client/client.module#ClientModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
