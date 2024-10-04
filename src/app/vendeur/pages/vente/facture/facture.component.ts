import { Component, OnInit } from '@angular/core';
import { VenteImplService } from '../../../../core/services/impl/vente-impl.service';
import { VenteById } from '../../../../core/models/vente.model';
import { RestResponse } from '../../../../core/models/rest.response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture',
  standalone: true,
  imports: [],
  templateUrl: './facture.component.html',
  styleUrl: './facture.component.css'
})
export class FactureComponent implements OnInit {
  vente? : VenteById
  numFacture? : string
  idVente ? : number

  constructor(private venteService : VenteImplService,private route : ActivatedRoute){
    this.idVente = Number(this.route.snapshot.paramMap.get('venteId'))
  }
  ngOnInit(): void {
    this.refresh(this.idVente!)
  }



  refresh(idVente : number){
    this.venteService.findByIdVente(idVente).subscribe(
      (data) =>(
        (this.vente = data),
        (this.numFacture = this.vente?.venteId+''+this.vente?.date)
      )
      )
  }

  print() {
    window.print();
  }


}
