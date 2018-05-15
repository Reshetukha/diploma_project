import { Component, OnInit } from '@angular/core';
import { NewsUnit } from '../news-unit';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.css']
})

export class ShortNewsComponent implements OnInit {

  private news: NewsUnit[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getLastNews()
      .subscribe(news => this.news = news);
  }

}
