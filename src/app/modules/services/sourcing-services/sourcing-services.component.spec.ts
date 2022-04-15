import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingServicesComponent } from './sourcing-services.component';

describe('SourcingServicesComponent', () => {
  let component: SourcingServicesComponent;
  let fixture: ComponentFixture<SourcingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
