import { ProduitComponent } from './../../vendeur/pages/produit/produit.component';
import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { ProduitList, ProduitRequest } from '../models/produit.model';

export interface ProduitService{
  findAll(page:number,search:string): Observable<RestResponse<ProduitList[]>> ;
  create(produit:ProduitRequest):Observable<RestResponse<ProduitList>> ;
}
