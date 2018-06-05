import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsUnit } from './news-unit';
import { NEWS } from './mock-news';

@Injectable()
export class NewsService {

  constructor() { }

  getAllNews(): Observable<NewsUnit[]> {
    return Observable.of(NEWS);
  }

  getLastNews(): Observable<NewsUnit[]> {
    return Observable.of(NEWS.slice(0, 3));
  }

  getNews(id): Observable<NewsUnit> {
    return Observable.of(NEWS.find( item => item.id === id));
  }

  getNewsIds(): Observable<any[]> {
    let newsIdTitle = [];
    NEWS.forEach( item => {
      newsIdTitle.push(new newIdnTitle(item.id, item.title));
    });
    return Observable.of(newsIdTitle);
  }
}

class newIdnTitle {
  id : number;
  title: string;
  constructor(id, title){
    this.id = id;
    this.title = title;
  }
}
