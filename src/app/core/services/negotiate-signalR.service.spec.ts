/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NegotiateSignalRService } from './negotiate-signalR.service';

describe('Service: BranchSecuritySignalR', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegotiateSignalRService]
    });
  });

  it('should ...', inject([NegotiateSignalRService], (service: NegotiateSignalRService) => {
    expect(service).toBeTruthy();
  }));
});
