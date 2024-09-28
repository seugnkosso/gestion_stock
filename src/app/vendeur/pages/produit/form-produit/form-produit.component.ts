import { ProduitRequest } from './../../../../core/models/produit.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ProduitImplService } from '../../../../core/services/impl/produit-impl.service';

@Component({
  selector: 'app-form-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-produit.component.html',
  styleUrl: './form-produit.component.css'
})
export class FormProduitComponent {

  form: any
  @Output() onCloseForm :EventEmitter<any> = new EventEmitter()
  constructor(
    private fb: FormBuilder,
    private produitervice : ProduitImplService
  ){
    this.form = this.fb.group({
      libelle:  ['',[Validators.required]] ,
      qte:  ['',[Validators.required,Validators.min(1)]] ,
      categorie:  ['',[Validators.required]] ,
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

  closeForm() {
    this.onCloseForm.emit();
  }

}
