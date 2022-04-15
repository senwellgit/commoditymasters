import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCirReportComponent } from './monthly-cir-report.component';

describe('MonthlyCirReportComponent', () => {
  let component: MonthlyCirReportComponent;
  let fixture: ComponentFixture<MonthlyCirReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyCirReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCirReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
