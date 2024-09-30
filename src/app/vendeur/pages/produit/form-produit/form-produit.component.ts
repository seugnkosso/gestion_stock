import { RestResponse } from './../../../../core/models/rest.response';
import { ProduitList, ProduitRequest } from './../../../../core/models/produit.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ProduitImplService } from '../../../../core/services/impl/produit-impl.service';
import { MagasinImplService } from '../../../../core/services/impl/magasin-impl.service';
import { MagasinSelect } from '../../../../core/models/magasin.model';

@Component({
  selector: 'app-form-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-produit.component.html',
  styleUrl: './form-produit.component.css'
})
export class FormProduitComponent   {

  form: any
  @Output() onCloseForm :EventEmitter<any> = new EventEmitter()
  @Input({required : true}) produitModifier? : ProduitList | null
  dataProd? : RestResponse<ProduitList> | null;
  dataMagasin? :MagasinSelect
  idUser = localStorage.getItem('idUser')!;
  compteEnter = 0
  constructor(
    private fb: FormBuilder,
    private produitervice : ProduitImplService,
    private magasinService : MagasinImplService
  ){
    this.form = this.fb.group({
      id:  [null] ,
      libelle:  ['',[Validators.required]] ,
      qte:  ['',[Validators.required]] ,
      categorie:  ['categorie',[Validators.required]] ,
      reference:  ['',[Validators.required]] ,
      photo:  [''] ,
      prixAchat:  ['',[Validators.required,Validators.min(1)]] ,
      prixVente:  ['',[Validators.required,Validators.min(1)]] ,
      prixVenteMin:  ['',[Validators.required,Validators.min(1)]] ,
      magasinId:  ['',[Validators.required]]
    });
  }

  onSubmit() {
    const produitRequest = this.form.value as ProduitRequest;
    this.produitervice.create(produitRequest).subscribe((data)=>{
    this.closeForm();
    })
  }


  searchLibelle(libelle : string) {
    if(libelle.length > 2 && libelle.length < 20){
      this.produitervice.findByLibelle(libelle).subscribe((data)=>{
        this.dataProd = data
      })
    }
  }

  chargeMagasinId() {
    this.magasinService.findMagasinByVendeurId(this.idUser).subscribe((data)=>{
      this.form.controls['magasinId'].setValue(data.id);
    })
  }


  chargeForm() {
    if(this.compteEnter == 0){
      if(this.produitModifier?.id != null){
        this.form.controls['id'].setValue(this.produitModifier.id);
        this.form.controls['libelle'].setValue(this.produitModifier.libelle);
        this.form.controls['categorie'].setValue(this.produitModifier.categorie);
        this.form.controls['qte'].setValue(0);
        this.form.controls['reference'].setValue(this.produitModifier.reference);
        this.form.controls['photo'].setValue(this.produitModifier.photo);
        this.form.controls['prixAchat'].setValue(this.produitModifier.prixAchat);
        this.form.controls['prixVente'].setValue(this.produitModifier.prixVente);
        this.form.controls['prixVenteMin'].setValue(this.produitModifier.prixVenteMin);
        this.chargeMagasinId()
        this.compteEnter += 1;
      }
    }
    if(this.produitModifier?.id == undefined){
      this.form.controls['id'].setValue(null);
    }
  }

  onSubmitModification() {
    this.form.controls['qte'].setValue(this.produitModifier?.qte + this.form.controls['qte'].value);
    const produitRequest = this.form.value as ProduitRequest;
    this.produitervice.update(produitRequest).subscribe((data)=>{
    this.closeForm();
    })
    this.closeForm()
  }

  closeForm() {
    this.onCloseForm.emit();
    this.compteEnter = 0;
    this.dataProd = null
    this.produitModifier = null;
    this.form.reset()
    this.form.controls['categorie'].setValue("categorie");
    this.form.controls['photo'].setValue("photo");
  }
}
