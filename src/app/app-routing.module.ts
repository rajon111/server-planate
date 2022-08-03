import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/About/about/about.component';
import { PrivacyPolicyComponent } from './components/pages/About/privacy-policy/privacy-policy.component';
import { RefundAndReturnPolicyComponent } from './components/pages/About/refund-and-return-policy/refund-and-return-policy.component';
import { TermsAndConditionsComponent } from './components/pages/About/terms-and-conditions/terms-and-conditions.component';

import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { DomainSearchComponent } from './components/pages/Domains/domain-search/domain-search.component';
import { DomainTransferComponent } from './components/pages/Domains/domain-transfer/domain-transfer.component';
import { HomeComponent } from './components/pages/home/home/home.component';
import { ResellerHostingComponent } from './components/pages/Hosting/reseller-hosting/reseller-hosting.component';
import { VpsHostingComponent } from './components/pages/Hosting/vps-hosting/vps-hosting.component';
import { WebHostingComponent } from './components/pages/Hosting/web-hosting/web-hosting.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'host-about', component: AboutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsAndConditionsComponent },
  { path: 'refund-and-return-policy', component: RefundAndReturnPolicyComponent },
  { path: 'domain-search', component: DomainSearchComponent },
  { path: 'domain-transfer', component: DomainTransferComponent },
  { path: 'web-hosting', component: WebHostingComponent },
  { path: 'vps-hosting', component: VpsHostingComponent },
  { path: 'reseller-hosting', component: ResellerHostingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
