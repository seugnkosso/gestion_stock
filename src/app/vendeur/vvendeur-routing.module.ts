import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './pages/produit/produit.component';

const routes: Routes = [
          {
            path: 'produits',
            children: [
              {
                path: '',
                component: ProduitComponent,
              }
            ]
          }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VvendeurRoutingModule { }
