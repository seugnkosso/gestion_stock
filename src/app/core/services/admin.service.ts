import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { AdminList } from "../models/admin.model";

export interface AdminService{
  findAll(page:number): Observable<RestResponse<AdminList[]>> ;
}
