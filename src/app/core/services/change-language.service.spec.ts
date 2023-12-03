/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeLanguageService } from './change-language.service';

describe('Service: ChangeLanguage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeLanguageService]
    });
  });

  it('should ...', inject([ChangeLanguageService], (service: ChangeLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
