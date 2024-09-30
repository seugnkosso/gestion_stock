export interface ProduitList {
  id?: number | null,
  libelle?: string,
  qte?: number,
  categorie?: string,
  reference?: string,
  photo?: string,
  prixAchat?: number,
  prixVente?: number,
  prixVenteMin?: number
}

export interface ProduitRequest {
  id?: string,
  libelle?: string,
  qte?: number,
  categorie?: string,
  reference?: string,
  photo?: string,
  prixAchat?: number,
  prixVente?: number,
  prixVenteMin?: number,
  magasinId?: number,
}
