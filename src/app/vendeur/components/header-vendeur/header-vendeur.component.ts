import { Component } from '@angular/core';

@Component({
  selector: 'app-header-vendeur',
  templateUrl: './header-vendeur.component.html',
  styleUrl: './header-vendeur.component.css'
})
export class HeaderVendeurComponent {
  deconnecter() {
    localStorage.clear();
    window.location.reload();
  }
}
