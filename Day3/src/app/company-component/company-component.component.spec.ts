import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyComponentComponent } from './company-component.component';

describe('CompanyComponentComponent', () => {
  let component: CompanyComponentComponent;
  let fixture: ComponentFixture<CompanyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
