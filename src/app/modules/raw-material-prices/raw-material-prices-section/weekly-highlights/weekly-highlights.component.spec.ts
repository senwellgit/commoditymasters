import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyHighlightsComponent } from './weekly-highlights.component';

describe('WeeklyHighlightsComponent', () => {
  let component: WeeklyHighlightsComponent;
  let fixture: ComponentFixture<WeeklyHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
