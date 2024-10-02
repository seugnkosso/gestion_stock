import { ProduitRequest } from '../../models/produit.model';
import { Injectable } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ProduitList } from '../../models/produit.model';
import { ClientService } from '../client.service';
import { clientList } from '../../models/client.model';
import { FaireVenteService } from '../faire-vente.service';
import { DetailVenteRequest, FaireVenteRequest, VenteSelect } from '../../models/Faire-vente.model';

@Injectable({
  providedIn: 'root'
})
export class FaireVenteImplService implements FaireVenteService {
  apiUrl = `${environment.APIURL}/vendres`;

  constructor(public http: HttpClient) { }
  detailVente(detailVenteRequest: DetailVenteRequest): Observable<RestResponse<VenteSelect>> {
    return this.http.post<RestResponse<VenteSelect>>(`${this.apiUrl}/detail`, detailVenteRequest)
  }
  faireVente(venteRequest: FaireVenteRequest): Observable<RestResponse<VenteSelect>> {
    return this.http.post<RestResponse<VenteSelect>>(this.apiUrl, venteRequest)
  }

}
