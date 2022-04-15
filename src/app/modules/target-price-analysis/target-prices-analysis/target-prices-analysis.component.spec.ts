import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPricesAnalysisComponent } from './target-prices-analysis.component';

describe('TargetPricesAnalysisComponent', () => {
  let component: TargetPricesAnalysisComponent;
  let fixture: ComponentFixture<TargetPricesAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetPricesAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPricesAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
