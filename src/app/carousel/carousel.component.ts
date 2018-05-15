import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./carousel.component.css']
}) 

export class CarouselComponent implements OnInit {

  private imgUri = ['./assets/img/Tesla-logo.png',
            './assets/img/Tesla-presentation-2.jpg',
            './assets/img/Tesla-presentation.jpg',
            './assets/img/Tesla-presentation-3.png'];

  private images: Array<string>;

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
    this.getImages()
      .subscribe(images => this.images = images);
  }

  getImages(): Observable<Array<string>> {
    return Observable.of(this.imgUri);
  }

}
