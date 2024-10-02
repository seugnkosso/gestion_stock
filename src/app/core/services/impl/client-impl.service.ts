import { ProduitRequest } from './../../models/produit.model';
import { Injectable } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ProduitList } from '../../models/produit.model';
import { ClientService } from '../client.service';
import { clientList } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientImplService implements ClientService {
  apiUrl = `${environment.APIURL}/clients`;

  constructor(public http: HttpClient) { }
  create(client: clientList): Observable<RestResponse<clientList>> {
    return this.http.post<RestResponse<clientList>>(this.apiUrl, client)
  }
  findByTelephone(tel: string): Observable<RestResponse<clientList>> {
    return this.http.get<RestResponse<clientList>>(`${this.apiUrl}/telephone?tel=${tel}`);
  }

}
