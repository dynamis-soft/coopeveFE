import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
    { path: 'edit', component: EditComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
