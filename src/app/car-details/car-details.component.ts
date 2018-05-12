import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CarUnit } from '../car-unit';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car: CarUnit;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCar();
    window.scrollTo(0, 0);
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carsService.getCarWithId(id)
      .subscribe( car => this.car = car );
  }

  goBack(): void {
    this.location.back();
  }
}
