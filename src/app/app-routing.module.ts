import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const PAGES = [
  { path: 'home', component: HomePageComponent, name: 'Home' },
  { path: 'bio', component: ProfilePageComponent, name: 'Profile' },
  { path: 'portfolio', component: PortfolioPageComponent, name: 'Portfolio' },
  { path: 'contact', component: ContactPageComponent, name: 'Contact' }
]

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ...PAGES
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
