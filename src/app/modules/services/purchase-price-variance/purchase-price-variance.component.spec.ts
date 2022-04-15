import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePriceVarianceComponent } from './purchase-price-variance.component';

describe('PurchasePriceVarianceComponent', () => {
  let component: PurchasePriceVarianceComponent;
  let fixture: ComponentFixture<PurchasePriceVarianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePriceVarianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePriceVarianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
