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
import { AboutComponent } from './components/pages/About/about/about.component';
import { PrivacyPolicyComponent } from './components/pages/About/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/pages/About/terms-and-conditions/terms-and-conditions.component';
import { RefundAndReturnPolicyComponent } from './components/pages/About/refund-and-return-policy/refund-and-return-policy.component';
import { DomainSearchComponent } from './components/pages/Domains/domain-search/domain-search.component';
import { DomainTransferComponent } from './components/pages/Domains/domain-transfer/domain-transfer.component';
import { WebHostingComponent } from './components/pages/Hosting/web-hosting/web-hosting.component';
import { VpsHostingComponent } from './components/pages/Hosting/vps-hosting/vps-hosting.component';
import { ResellerHostingComponent } from './components/pages/Hosting/reseller-hosting/reseller-hosting.component';

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
    HomeCustomClientComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    RefundAndReturnPolicyComponent,
    DomainSearchComponent,
    DomainTransferComponent,
    WebHostingComponent,
    VpsHostingComponent,
    ResellerHostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
