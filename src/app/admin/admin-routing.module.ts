import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './pages/admins/admins.component';

const routes: Routes = [
  {
    path: 'admins',
    children: [
      {
        path: '',
        component: AdminsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
