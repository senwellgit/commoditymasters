import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInterlligenceComponent } from './purchase-interlligence.component';

describe('PurchaseInterlligenceComponent', () => {
  let component: PurchaseInterlligenceComponent;
  let fixture: ComponentFixture<PurchaseInterlligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseInterlligenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseInterlligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
