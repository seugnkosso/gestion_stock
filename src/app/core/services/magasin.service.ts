import { ProduitComponent } from '../../vendeur/pages/produit/produit.component';
import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { MagasinSelect } from '../models/magasin.model';

export interface MagasinService{
  findMagasinByVendeurId(id:string): Observable<MagasinSelect> ;
}
