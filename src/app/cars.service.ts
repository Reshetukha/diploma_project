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

  getCarWithId(id: number) : Observable<CarUnit> {
    return Observable.of(CARS.find( item => item.id === id));
  }

  getCarsIds(): Observable<number[]> {
    let IDs = [];
    CARS.forEach( item => IDs.push(item.id));
    return Observable.of(IDs);
  }

}
