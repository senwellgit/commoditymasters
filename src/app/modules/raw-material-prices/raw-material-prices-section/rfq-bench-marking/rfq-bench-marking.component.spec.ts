import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqBenchMarkingComponent } from './rfq-bench-marking.component';

describe('RfqBenchMarkingComponent', () => {
  let component: RfqBenchMarkingComponent;
  let fixture: ComponentFixture<RfqBenchMarkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfqBenchMarkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqBenchMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
