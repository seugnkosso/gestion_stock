export interface FaireVenteRequest {
    clientTelephone?: string
      idVendeur?: string
      total?: number
}

export interface VenteSelect {
    id? : number
}


export interface DetailVenteRequest {
  venteId ? : number;
  produitId ? : number;
  prix ? : number;
  qte ? : number;
  total ? : number;
}

