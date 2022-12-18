import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpExperienceComponent } from './emp-experience.component';

describe('EmpExperienceComponent', () => {
  let component: EmpExperienceComponent;
  let fixture: ComponentFixture<EmpExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
