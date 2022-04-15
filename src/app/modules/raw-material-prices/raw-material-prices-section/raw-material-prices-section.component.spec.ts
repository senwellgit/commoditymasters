import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialPricesSectionComponent } from './raw-material-prices-section.component';

describe('RawMaterialPricesSectionComponent', () => {
  let component: RawMaterialPricesSectionComponent;
  let fixture: ComponentFixture<RawMaterialPricesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawMaterialPricesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawMaterialPricesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
