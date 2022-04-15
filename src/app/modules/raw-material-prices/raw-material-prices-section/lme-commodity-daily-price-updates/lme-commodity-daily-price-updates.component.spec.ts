import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmeCommodityDailyPriceUpdatesComponent } from './lme-commodity-daily-price-updates.component';

describe('LmeCommodityDailyPriceUpdatesComponent', () => {
  let component: LmeCommodityDailyPriceUpdatesComponent;
  let fixture: ComponentFixture<LmeCommodityDailyPriceUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmeCommodityDailyPriceUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmeCommodityDailyPriceUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
