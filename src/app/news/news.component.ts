import { Component, OnInit } from '@angular/core';
import { NewsUnit } from '../news-unit';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  private news: NewsUnit[];

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getNews();
  }

  getNews(): void {
    this.newsService.getAllNews()
      .subscribe(news => this.news = news);
  }

}
