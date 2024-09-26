import { Injectable } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { AdminList } from '../../models/admin.model';
import { RestResponse } from '../../models/rest.response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminImplService implements AdminService {
  apiUr = `${environment.APIURL}/admins`

  constructor(private hhtp: HttpClient) { }
  findAll(page: number = 0): Observable<RestResponse<AdminList[]>> {
    return this.hhtp.get<RestResponse<AdminList[]>>(`${this.apiUr}?page=${page}`)
  }
}
