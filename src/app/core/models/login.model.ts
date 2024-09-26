export interface TokenResponse{
  id?:number,
  token:string,
  roles: string[]
}


export interface AuthentificationRequest{
  username?: string;
  password?: string;
}
