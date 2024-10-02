import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { VenteList } from '../models/vente.model';

export interface VenteService{
  findAllVenteByTelOrDate(page : number, tel : string, date : string ): Observable<RestResponse<VenteList[]>>
  totalVente(tel : string, date : string ): Observable<number>
}
