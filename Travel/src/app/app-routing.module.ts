import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './Components/travel/travel.component';
import { ContactComponent } from './Components/travel/contact/contact.component';
import { PackagesComponent } from './Components/travel/packages/packages.component';
import { AboutComponent } from './Components/travel/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'travello',
    pathMatch: 'full'
  },
  {
    path: 'travello',
    component: TravelComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
