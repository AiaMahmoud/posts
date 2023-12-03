import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageConfermationDeleteComponent } from './massage-confermation-delete.component';

describe('MassageConfermationDeleteComponent', () => {
  let component: MassageConfermationDeleteComponent;
  let fixture: ComponentFixture<MassageConfermationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageConfermationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageConfermationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
