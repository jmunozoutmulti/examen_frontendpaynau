import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService } from './person.service';
import { environment } from '../environments/environment';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService]
    });
    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch persons', () => {
    const dummyPersons = [
      { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone: '123456789', address: '123 Main St' },
      { id: 2, first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@example.com', phone: '987654321', address: '456 Main St' }
    ];

    service.getPersons().subscribe(persons => {
      expect(persons.length).toBe(2);
      expect(persons).toEqual(dummyPersons);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/persons`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPersons);
  });
});
