import { ProduitComponent } from './../../vendeur/pages/produit/produit.component';
import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { AdminList } from "../models/admin.model";
import { ProduitList } from '../models/produit.model';

export interface ProduitService{
  findAll(page:number,search:string): Observable<RestResponse<ProduitList[]>> ;
}
