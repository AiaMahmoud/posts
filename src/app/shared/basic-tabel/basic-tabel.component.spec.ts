import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabelComponent } from './basic-tabel.component';

describe('BasicTabelComponent', () => {
  let component: BasicTabelComponent;
  let fixture: ComponentFixture<BasicTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
