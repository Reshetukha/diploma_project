import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { NewsUnit } from '../news-unit';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  news: NewsUnit;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getNews();
    window.scrollTo(0, 0);
  }

  getNews(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.newsService.getNews(id)
      .subscribe(news => {this.news = news; console.log(this.news)});
  }

  goBack(): void {
    this.location.back();
  }
}
