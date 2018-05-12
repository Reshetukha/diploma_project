import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  constructor(
    private newsService: NewsService,
    private carsService: CarsService
  ) { }

  newsIds : number[];
  carsIds : number[];

  public isCollapsed = true;
  public isCollapsedCars = true; 

  ngOnInit() {
    this.getNewsIDs();
    this.getCarsIDs();
  }

  getNewsIDs(): void {
    this.newsService.getNewsIds()
      .subscribe( id => this.newsIds = id);
  }

  getCarsIDs(): void {
    this.carsService.getCarsIds()
      .subscribe( id => this.carsIds = id);
  }
}
