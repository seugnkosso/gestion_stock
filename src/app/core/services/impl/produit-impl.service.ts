import { Injectable } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';
import { ProduitList } from '../../models/produit.model.ts';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitImplService implements ProduitService {
  apiUrl = `${environment.APIURL}/produits?id=${localStorage.getItem('idUser')}`;

  constructor(public http: HttpClient) { }

  findAll(page: number = 0,search: string =""): Observable<RestResponse<ProduitList[]>> {
    return this.http.get<RestResponse<ProduitList[]>>(`${this.apiUrl}&page=${page}&search=${search}`)
  }
}
