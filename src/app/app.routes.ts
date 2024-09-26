import { Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';

export const routes: Routes = [
  // {
  //   path: 'ADMIN',
  //   component: LayoutComponentRp,
  //   loadChildren: () => import('./rp/rp.module').then((mod) => mod.RPModule),
  //   canMatch: [() => inject(IdentifyService).RpIsIdentified()],
  // },
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
