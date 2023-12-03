/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';

import { LoaderService } from './loader.service';





import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('Service: Loader', () => {
    beforeEach(() => {
         TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
            providers: [LoaderService]
        });
    });

    it('should ...', inject([LoaderService], (service: LoaderService) => {
        expect(service).toBeTruthy();
    }));
});
