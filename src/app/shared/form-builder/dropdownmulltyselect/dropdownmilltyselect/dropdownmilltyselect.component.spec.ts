import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownmilltyselectComponent } from './dropdownmilltyselect.component';

describe('DropdownmilltyselectComponent', () => {
  let component: DropdownmilltyselectComponent;
  let fixture: ComponentFixture<DropdownmilltyselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownmilltyselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownmilltyselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
