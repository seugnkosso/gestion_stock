import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-vendeur',
  templateUrl: './sidebar-vendeur.component.html',
  styleUrl: './sidebar-vendeur.component.css'
})
export class SidebarVendeurComponent {
  adminConnecter?: string;
  constructor() {
    if(localStorage.getItem('role') != undefined){
      this.adminConnecter = localStorage.getItem('role')!;
    }
  }
}
