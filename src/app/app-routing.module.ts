import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'car/:id', component: CarDetailsComponent},
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'special_offers', component: SpecialOffersComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'sitemap', component: SitemapComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
