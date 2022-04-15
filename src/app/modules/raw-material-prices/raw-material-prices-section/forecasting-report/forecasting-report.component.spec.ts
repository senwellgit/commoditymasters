import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastingReportComponent } from './forecasting-report.component';

describe('ForecastingReportComponent', () => {
  let component: ForecastingReportComponent;
  let fixture: ComponentFixture<ForecastingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
