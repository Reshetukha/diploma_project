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

  news: NewsUnit[];

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getNews();
    // this.news.map( item => {
    //   if ( item.text.length < 250 ) return item;
    //   item.text = item.text.slice(0, 250) + ' ...';
    //   return item;
    // });
    // this.news = this.news.sort( (a, b) => {
    //   return b.id - a.id;
    // });
  }

  getNews(): void {
    this.newsService.getAllNews()
      .subscribe(news => this.news = news);
  }

}
