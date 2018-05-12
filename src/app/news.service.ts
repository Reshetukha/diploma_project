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

  getNewsIds(): Observable<number[]> {
    let IDs = [];
    NEWS.forEach( item => IDs.push(item.id));
    return Observable.of(IDs);
  }
}
