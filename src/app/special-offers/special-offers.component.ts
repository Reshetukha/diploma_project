import { Component, OnInit } from '@angular/core';
import { CarUnit } from '../car-unit';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

  private cars: CarUnit[];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getCars();
  }

  getCars(): void {
    this.carsService.getAllCars()
      .subscribe(cars => this.cars = cars);
  }

}
