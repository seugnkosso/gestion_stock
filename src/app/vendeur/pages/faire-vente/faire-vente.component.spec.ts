import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireVenteComponent } from './faire-vente.component';

describe('FaireVenteComponent', () => {
  let component: FaireVenteComponent;
  let fixture: ComponentFixture<FaireVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaireVenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaireVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
