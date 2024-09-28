import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { MagasinService } from '../magasin.service';
import { Observable } from 'rxjs';
import { MagasinSelect } from '../../models/magasin.model';
import { RestResponse } from '../../models/rest.response';

@Injectable({
  providedIn: 'root'
})
export class MagasinImplService implements MagasinService {
  apiUrl =`${environment.APIURL}/magasins`
  constructor(private http: HttpClient) { }
  findMagasinByVendeurId(id: string): Observable<MagasinSelect> {
    return this.http.get<MagasinSelect>(`${this.apiUrl}/vendeur?id=${id}`)
  }
}
