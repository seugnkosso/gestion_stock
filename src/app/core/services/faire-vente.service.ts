import { DetailVenteRequest } from './../models/Faire-vente.model';
import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { FaireVenteRequest, VenteSelect } from '../models/Faire-vente.model';

export interface FaireVenteService{
  faireVente( venteRequest : FaireVenteRequest ): Observable<RestResponse<VenteSelect>>
  detailVente( detailVenteRequest : DetailVenteRequest ): Observable<RestResponse<VenteSelect>>
}
