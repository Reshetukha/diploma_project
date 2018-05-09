import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  newsIds : number[];
  public isCollapsed = true;  

  ngOnInit() {
    this.getNewsIDs();
  }

  getNewsIDs(): void {
    this.newsService.getNewsIds()
      .subscribe( id => this.newsIds = id);
  }
}
