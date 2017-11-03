import { TestBed, inject } from '@angular/core/testing';

import { InstagramConnectorService } from './instagram-connector.service';

describe('InstagramConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramConnectorService]
    });
  });

  it('should be created', inject([InstagramConnectorService], (service: InstagramConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
