import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './pages/produit/produit.component';
import { FaireVenteComponent } from './pages/faire-vente/faire-vente.component';

const routes: Routes = [
          {
            path: 'produits',
            children: [
              {
                path: '',
                component: ProduitComponent,
              }
            ]
          },
          {
            path: 'faireVente',
            children: [
              {
                path: '',
                component: FaireVenteComponent,
              }
            ]
          }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VvendeurRoutingModule { }
