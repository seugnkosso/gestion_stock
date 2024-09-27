import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VvendeurRoutingModule } from './vvendeur-routing.module';
import { VendeurLayoutComponent } from './vendeur-layout/vendeur-layout.component';
import { HeaderVendeurComponent } from './components/header-vendeur/header-vendeur.component';
import { SidebarVendeurComponent } from './components/sidebar-vendeur/sidebar-vendeur.component';



@NgModule({
  declarations: [
    VendeurLayoutComponent,HeaderVendeurComponent,SidebarVendeurComponent
  ],
  imports: [
    CommonModule,
    VvendeurRoutingModule
  ]
})
export class VvendeurModule { }
