import { Injectable } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ProduitList, ProduitRequest } from '../../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitImplService implements ProduitService {
  apiUrl = `${environment.APIURL}/produits`;

  constructor(public http: HttpClient) { }

  create(produit: ProduitRequest): Observable<RestResponse<ProduitList>> {
    return this.http.post<RestResponse<ProduitList>>(this.apiUrl, produit)
  }

  findAll(page: number = 0,search: string =""): Observable<RestResponse<ProduitList[]>> {
    return this.http.get<RestResponse<ProduitList[]>>(`${this.apiUrl}?id=${localStorage.getItem('idUser')}&page=${page}&search=${search}`)
  }

  findByLibelle(libelle: string): Observable<RestResponse<ProduitList>> {
    return this.http.get<RestResponse<ProduitList>>(`${this.apiUrl}/libelle?libelle=${libelle}`)
  }

}
