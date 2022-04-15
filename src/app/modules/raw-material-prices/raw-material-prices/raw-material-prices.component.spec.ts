import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialPricesComponent } from './raw-material-prices.component';

describe('RawMaterialPricesComponent', () => {
  let component: RawMaterialPricesComponent;
  let fixture: ComponentFixture<RawMaterialPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawMaterialPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawMaterialPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
