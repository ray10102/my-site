import { Component, OnInit } from '@angular/core';
import { PAGES } from '../app-routing.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pages = PAGES;

}
