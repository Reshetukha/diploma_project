import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./carousel.component.css']
}) 

export class CarouselComponent implements OnInit {

  imgUri = ['./assets/img/test1.jpg',
            './assets/img/test2.jpg',
            './assets/img/test3.jpg'];

  // images: String[];
  images: Array<string>

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
  // constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getImages()
      .subscribe(images => this.images = images);
  }

  // Observable<String[]>

  getImages(): Observable<Array<string>> {
    return Observable.of(this.imgUri);
  }

}

//   constructor(private _http: HttpClient) {}
//   ngOnInit() {
//     this._http.get('https://picsum.photos/list')
//         .subscribe(images => this.images = images);
//   }