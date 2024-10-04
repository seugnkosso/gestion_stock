import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './pages/produit/produit.component';
import { FaireVenteComponent } from './pages/faire-vente/faire-vente.component';
import { VenteComponent } from './pages/vente/vente.component';
import { FactureComponent } from './pages/vente/facture/facture.component';

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
          },
          {
            path: 'vente',
            children: [
              {
                path: '',
                component: VenteComponent,
              },
              {
                path: 'facture/:venteId',
                component: FactureComponent,
              },
            ]
          }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VvendeurRoutingModule { }
