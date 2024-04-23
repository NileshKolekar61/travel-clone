import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './Components/travel/travel.component';
import { NavBarComponent } from './Components/travel/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './Components/travel/contact/contact.component';
import { AboutComponent } from './Components/travel/about/about.component';
import { PackagesComponent } from './Components/travel/packages/packages.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Components/travel/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    NavBarComponent,
    ContactComponent,
    AboutComponent,
    PackagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
