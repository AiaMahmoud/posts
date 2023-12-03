import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageConfermationComponent } from './massage-confermation.component';

describe('MassageConfermationComponent', () => {
  let component: MassageConfermationComponent;
  let fixture: ComponentFixture<MassageConfermationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageConfermationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageConfermationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
