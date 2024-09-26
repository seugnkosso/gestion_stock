import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { AuthentificationRequest, TokenResponse } from '../../models/login.model';
import { Observable } from 'rxjs';
import { RestResponse } from '../../models/rest.response';

@Injectable({
  providedIn: 'root'
})
export class AuthentificateService {
  isAuthentificated?:boolean;
  private apiUrl = `${environment.APIURL}/login`;

  constructor(private http: HttpClient) { }

  login(data:AuthentificationRequest):Observable<RestResponse<TokenResponse>>
  {
    return this.http.post<RestResponse<TokenResponse>>(this.apiUrl,data);
  }

  authentification() {
    return localStorage.getItem('connecter') === 'true';
}
}
