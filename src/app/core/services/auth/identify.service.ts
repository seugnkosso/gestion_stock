import { Injectable } from '@angular/core';
import { Role } from '../../models/role.enum';
import { AuthentificateService } from './authentificate.service';

@Injectable({
  providedIn: 'root'
})
export class IdentifyService {
  role?: Role;

  constructor(private authservice: AuthentificateService) { }

  identified(tab: String[]) {
    if (tab.indexOf('Admin') != -1) {
      return Role.Admin;
    }
    if (tab.indexOf('Vendeur') != -1) {
      return Role.Vendeur;
    }
    return 'null';
  }

  getRoleConnecter() {
    return localStorage.getItem('role');
  }

  AdminIsIdentified() {
    return (
      this.authservice.authentification() == true &&
      this.getRoleConnecter() == Role.Admin
    );
  }

  VendeurIsIdentified() {
    return (
      this.authservice.authentification() == true &&
      this.getRoleConnecter() == Role.Vendeur
    );
  }
}
