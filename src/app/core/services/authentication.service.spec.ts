/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';





import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APP_BASE_HREF } from '@angular/common';
describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),],
      providers: [
        AuthenticationService,
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
