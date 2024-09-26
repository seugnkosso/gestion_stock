import { NgIf } from '@angular/common';
import { Directive, inject, OnInit } from '@angular/core';
import { AuthentificateService } from '../services/auth/authentificate.service';

@Directive({
  selector: '[IfAuthentificated]',
  standalone: true,
  hostDirectives:[{
    directive:NgIf
  }]
})
export class IfAuthentificatedDirective implements OnInit {

  private   authServ:AuthentificateService=inject(AuthentificateService);
  private ngIfDirective=inject(NgIf);


  ngOnInit(): void {
      this.ngIfDirective.ngIf=this.authServ.isAuthentificated
  }

}
