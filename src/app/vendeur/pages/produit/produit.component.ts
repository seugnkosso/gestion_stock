import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { ProduitImplService } from '../../../core/services/impl/produit-impl.service';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { ProduitList } from '../../../core/models/produit.model';
import { CommonModule } from '@angular/common';
import { FormProduitComponent } from './form-produit/form-produit.component';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [PaginationComponent,CommonModule,FormProduitComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{



  response? :RestResponse<ProduitList[]>
  dataPagination : PaginationModel = {
    pages: [],
    currentPage: 0
  }

  constructor(private produitService: ProduitImplService){

  }
  ngOnInit(): void {
    this.refresh()
  }

  refresh(pages:number =0 ,search :string=""){
    this.produitService.findAll(pages,search).subscribe(
      (data) => (
        (this.response = data),
        (this.dataPagination.currentPage = data.currentPage!),
        (this.dataPagination.pages = data.pages!)
      )
    )
  }

  paginate(page: number) {
    this.refresh(page);
  }

  searche(search:string){
    if (search.length > 3){
        this.refresh(0,search)
      }else if(search.length == 0){
        this.refresh()
      }
  }

  // FORM ADD ON
  isFormClosed = true;
  openForm() {
    this.isFormClosed = false;
  }
  closeForm() {
    this.isFormClosed = true;
  }
  // FORM ADD OFF
}
