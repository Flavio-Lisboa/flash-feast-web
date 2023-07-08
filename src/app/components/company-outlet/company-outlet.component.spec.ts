import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOutletComponent } from './company-outlet.component';

describe('CompanyOutletComponent', () => {
  let component: CompanyOutletComponent;
  let fixture: ComponentFixture<CompanyOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
