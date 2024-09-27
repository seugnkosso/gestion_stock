import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVendeurComponent } from './header-vendeur.component';

describe('HeaderVendeurComponent', () => {
  let component: HeaderVendeurComponent;
  let fixture: ComponentFixture<HeaderVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderVendeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
