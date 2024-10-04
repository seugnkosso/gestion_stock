import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { VenteService } from '../vente.service';
import { Observable } from 'rxjs';
import { RestResponse } from '../../models/rest.response';
import { VenteById, VenteList } from '../../models/vente.model';

@Injectable({
  providedIn: 'root'
})
export class VenteImplService implements VenteService {
  apiUrl = `${environment.APIURL}/ventes`

  constructor(private http: HttpClient) { }
  findByIdVente(id: number): Observable<VenteById> {
    return this.http.get<VenteById>(`${this.apiUrl}/id?id=${id}`)
  }
  totalVente(tel: string = '', date: string = ''): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total?tel=${tel}&dateVente=${date}`)
  }
  findAllVenteByTelOrDate(page: number = 0, tel: string = '', date: string = ''): Observable<RestResponse<VenteList[]>> {
    return this.http.get<RestResponse<VenteList[]>>(`${this.apiUrl}?tel=${tel}&dateVente=${date}&page=${page}`)
  }
}
