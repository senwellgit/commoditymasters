import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyNewsletterComponent } from './quarterly-newsletter.component';

describe('QuarterlyNewsletterComponent', () => {
  let component: QuarterlyNewsletterComponent;
  let fixture: ComponentFixture<QuarterlyNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterlyNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterlyNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
