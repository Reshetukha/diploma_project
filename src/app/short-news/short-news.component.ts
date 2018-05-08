import { Component, OnInit } from '@angular/core';
import { NewsUnit } from '../news-unit';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.css']
})

export class ShortNewsComponent implements OnInit {

  news: NewsUnit[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
    this.news.map( item => {
      console.log(item.text.length);
      if ( item.text.length < 250 ) return item;
      item.text = item.text.slice(0, 250) + ' ...';
      return item;
    });
  }

  getNews(): void {
    this.newsService.getLastNews()
      .subscribe(news => this.news = news);
  }

}
