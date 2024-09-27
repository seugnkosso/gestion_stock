import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarVendeurComponent } from './sidebar-vendeur.component';

describe('SidebarVendeurComponent', () => {
  let component: SidebarVendeurComponent;
  let fixture: ComponentFixture<SidebarVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarVendeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
