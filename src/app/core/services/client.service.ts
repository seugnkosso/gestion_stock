import { clientList } from './../models/client.model';
import { ProduitComponent } from './../../vendeur/pages/produit/produit.component';
import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { ProduitList, ProduitRequest } from '../models/produit.model';

export interface ClientService{
  findByTelephone(tel : string ): Observable<RestResponse<clientList>>
  create( client : clientList ): Observable<RestResponse<clientList>>
}
