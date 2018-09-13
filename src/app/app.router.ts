import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const router: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
