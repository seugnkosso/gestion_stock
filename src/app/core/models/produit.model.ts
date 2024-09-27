export interface ProduitList {
  id?: number;
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
