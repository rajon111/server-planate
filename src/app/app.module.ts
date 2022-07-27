import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home/home.component';
import { HomeSliderComponent } from './components/pages/home/home-slider/home-slider.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HomeDomainSearchComponent } from './components/pages/home/home-domain-search/home-domain-search.component';
import { HomeOurPlansComponent } from './components/pages/home/home-our-plans/home-our-plans.component';
import { HomeCustomClientComponent } from './components/pages/home/home-custom-client/home-custom-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSliderComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomeDomainSearchComponent,
    HomeOurPlansComponent,
    HomeCustomClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
