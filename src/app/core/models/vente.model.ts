export interface VenteList {
  venteId? : number
  client? : string
  date? : string
  total? : number
}

export interface VenteById {
  client? : string
  date? : string
  total? : number
  magasin?: string,
  address?: string,
  tel?: string,
  detailVenteListDtos? : detailVenteListDtos[]
  venteId? : number
}

export interface detailVenteListDtos {
      prix?: number,
      qte?: number,
      totalVente?: number,
      remise?: number,
      libelle?: string
}
