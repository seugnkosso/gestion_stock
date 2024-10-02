import { DetailVenteRequest, FaireVenteRequest } from './../../../core/models/Faire-vente.model';
import { Component } from '@angular/core';
import { ProduitImplService } from '../../../core/services/impl/produit-impl.service';
import { ProduitList } from '../../../core/models/produit.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientImplService } from '../../../core/services/impl/client-impl.service';
import { clientList } from '../../../core/models/client.model';
import { FaireVenteImplService } from '../../../core/services/impl/faire-vente-impl.service';

@Component({
  selector: 'app-faire-vente',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './faire-vente.component.html',
  styleUrl: './faire-vente.component.css'
})
export class FaireVenteComponent {
  
  
  message : Map<string,string> = new Map<string,string>()
  produitStorage : Array<Map<string,any>> = [];
  produits? : ProduitList[] ;
  total = 0
  cliendIsFind = false
  form:any
  constructor(
    private produitService: ProduitImplService,
    private fb :FormBuilder,
    private clientService : ClientImplService,
    private faireService : FaireVenteImplService
  ){
    this.form = this.fb.group({
      telephone: ['',[Validators.required,Validators.min(700000000)]],
      username: ['',[Validators.required]]
    })
  }

  searchProd(searchProd: string) {
    if(searchProd.length > 2){
      this.produitService.findAll(0, searchProd).subscribe((data)=>(
        this.produits = data.results!
      ))
    }else{
      this.produits = []
    }
  }

  onSubmit(prix: string,qte: string,libelle:string,reference:string,id:string,qteMax: number|undefined) {
      if(prix == '' || qte == '' || prix == '0' || qte == '0' ){
        this.message.set('error','le prix et la quantité sont obligatoire')
        return 
      }
      
      if(parseInt(qte) > qteMax!){
        this.message.set('error','la quantité donnée est supérieur a la quantité restante')
        return
      }
      this.message.clear();
      console.log(qte)
      
      if(this.produitStorage.length == 0){
        this.produitStorage!.push(new Map<string,string>([["prix",prix],["qte",qte],["libelle",libelle],["reference",reference],["id",id]]))
        this.total = parseInt(qte) * parseInt(prix)
      }else{
        var find = false
        this.produitStorage.forEach((item) =>{
          if(item.get('id') == id){
            item.set('qte',parseInt(item.get('qte')!) + parseInt(qte))
            this.total += parseInt(qte) * parseInt(prix)
            find = true
          }
        })
        if(find == false){
          this.produitStorage!.push(new Map<string,any>([["prix",prix],["qte",qte],["libelle",libelle],["reference",reference],["id",id]]))
          this.total += parseInt(qte) * parseInt(prix)
        }
      }
      this.produits = []
  }

  deleteProd(produit: Map<string,any>) {
    this.total -= produit.get('qte') * produit.get('prix')
    this.produitStorage.splice(this.produitStorage.indexOf(produit), 1);
  }




  searchClient()
  {
    if(this.form.get('telephone').value != null){
      if(this.form.get('telephone').value.toString().length >= 9 ) {
        this.clientService.findByTelephone(this.form.get('telephone')?.value).subscribe((data)=>{
          if(data != null){
            this.form.get('username').setValue(data.results.username)
            this.cliendIsFind = true
          }else{
            this.cliendIsFind = false
          }
        })
      }
    }
  }

  onSubmitVente() {
    const vente = {
      clientTelephone: this.form.get('telephone').value,
      idVendeur: localStorage.getItem('idUser'),
      total: this.total
    } as FaireVenteRequest;

    if(this.cliendIsFind != true){
      const client = this.form.value as clientList
      this.clientService.create(client).subscribe((data)=>{
            if(data.results != null){
              this.faireService.faireVente(vente).subscribe((data)=>{                
                if(data.results.id != null){
                  this.produitStorage.forEach((item)=>{
                      const detailvent = {
                        venteId : data.results.id,
                        produitId : item.get('id'),
                        prix : item.get('prix'),
                        qte : item.get('qte'),
                        total : item.get('qte') * item.get('prix'),
                      } as DetailVenteRequest
                      this.faireService.detailVente(detailvent).subscribe((data)=>{
                        this.total = 0                        
                        this.message.set('addSuccess','la vente est faite')
                        this.produitStorage = []
                        this.cliendIsFind = false
                        this.form.get('telephone').setValue('')
                        this.form.get('username').setValue('')
                      })                    
                  })
                }
              });
            }
      });
    }else{      
        this.faireService.faireVente(vente).subscribe((data)=>{
          if(data.results.id != null){
            this.produitStorage.forEach((item)=>{
                const detailvent = {
                  venteId : data.results.id,
                  produitId : item.get('id'),
                  prix : item.get('prix'),
                  qte : item.get('qte'),
                  total : item.get('qte') * item.get('prix'),
                } as DetailVenteRequest
                this.faireService.detailVente(detailvent).subscribe((data)=>{
                  this.total = 0
                  this.message.set('addSuccess','la vente est faite')
                  this.produitStorage = []
                  this.cliendIsFind = false
                  this.form.get('telephone').setValue('')
                  this.form.get('username').setValue('')
                })                    
            })
          }
        });
    }          
  }
}
