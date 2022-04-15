import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalImportExportDataComponent } from './global-import-export-data.component';

describe('GlobalImportExportDataComponent', () => {
  let component: GlobalImportExportDataComponent;
  let fixture: ComponentFixture<GlobalImportExportDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalImportExportDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalImportExportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
