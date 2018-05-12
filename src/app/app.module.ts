import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NewsService } from './news.service';
import { ShortNewsComponent } from './short-news/short-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { DiagrammComponent } from './diagramm/diagramm.component';
import { CarsService } from './cars.service';
import { CarDetailsComponent } from './car-details/car-details.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CarouselComponent,
    NewsComponent,
    TechnologiesComponent,
    SpecialOffersComponent,
    AboutUsComponent,
    ContactsComponent,
    SitemapComponent,
    ShortNewsComponent,
    NewsDetailsComponent,
    DiagrammComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [NewsService, CarsService]
})
export class AppModule { }
