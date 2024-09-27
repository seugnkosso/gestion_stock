import { Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { IdentifyService } from './core/services/auth/identify.service';
import { inject } from '@angular/core';
import { VendeurLayoutComponent } from './vendeur/vendeur-layout/vendeur-layout.component';

export const routes: Routes = [
  {
    path: 'Vendeur',
    component: VendeurLayoutComponent,
    loadChildren: () => import('./vendeur/vvendeur.module').then((mod) => mod.VvendeurModule),
    canMatch: [() => inject(IdentifyService).VendeurIsIdentified()],
  },
  {
    path: 'Admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then((mod) => mod.AdminModule),
    canMatch: [() => inject(IdentifyService).AdminIsIdentified()],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full', //pageNotFound Component
  },
];
