export interface RestResponse<T> {
  pages?: number[];
  size?: number;
  nbrPage?: number;
  TotalPages?: number;
  TotalItems?: number;
  currentPage?: number;
  results: T;
  status: number;
}
