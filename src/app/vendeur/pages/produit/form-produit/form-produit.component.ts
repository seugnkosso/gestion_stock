import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-produit.component.html',
  styleUrl: './form-produit.component.css'
})
export class FormProduitComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  form: any
  @Output() onCloseForm :EventEmitter<any> = new EventEmitter()
  constructor(
    private fb: FormBuilder,
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

  closeForm() {
    this.onCloseForm.emit();
  }

}
