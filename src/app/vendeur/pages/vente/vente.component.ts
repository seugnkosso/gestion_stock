import { Component, OnInit } from '@angular/core';
import { VenteImplService } from '../../../core/services/impl/vente-impl.service';
import { RestResponse } from '../../../core/models/rest.response';
import { VenteList } from '../../../core/models/vente.model';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { PaginationModel } from '../../../core/models/pagination.model';

@Component({
  selector: 'app-vente',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent implements OnInit {


  data? : RestResponse<VenteList[]>;
  dataPagination : PaginationModel = {
    pages: [],
    currentPage: 0
  }
  tel :  string = ''
  date : string = ''
  total : number = 0

  constructor(private VenteService : VenteImplService){}
  ngOnInit(): void {
    this.refresh()
  }

  refresh(page : number = 0,tel :string = '', dateVente : string = ''){
    this.VenteService.findAllVenteByTelOrDate(page,tel,dateVente).subscribe(
      (data) => (
        (this.data = data),
        (this.dataPagination.pages = data.pages!),
        (this.dataPagination.currentPage = data.currentPage!)
      )
    );

    this.VenteService.totalVente(tel,dateVente).subscribe(
      (data) => {
        this.total = data ?? 0
      }

    )
  }

  paginate(page: number) {
    this.refresh(page,this.tel,this.date);
  }

  searcheDate(date: string) {
    if(date.length != 0){
      this.date = date
    }else{
      this.date = ''
    }
    this.refresh(0, this.tel, this.date);
  }

  searcheClient(tel: string) {
    if(tel.length != 0){
      this.tel = tel
    }else{
      this.tel = ''
    }
    this.refresh(0, this.tel, this.date)
  }

}
