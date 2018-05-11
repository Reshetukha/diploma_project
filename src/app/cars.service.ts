import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarUnit } from './car-unit';
import { CARS } from './mock-cars';

@Injectable()
export class CarsService {

  constructor() { }

  getAllCars(): Observable<CarUnit[]> {
    return Observable.of(CARS);
  }

}
