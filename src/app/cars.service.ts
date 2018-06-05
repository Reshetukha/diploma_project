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

  getCarsIds(): Observable<any[]> {
    let carsIdTitle = [];
    CARS.forEach( item => {
      carsIdTitle.push(new carIdnTitle(item.id, item.title));
    });
    return Observable.of(carsIdTitle);
  }

}

class carIdnTitle {
  id : number;
  title: string;
  constructor(id, title){
    this.id = id;
    this.title = title;
  }
}