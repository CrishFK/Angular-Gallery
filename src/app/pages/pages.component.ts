import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  toggleNavBar = true;

  constructor() { }

  ngOnInit() {
  }

  navBarResponsive(): void {
    this.toggleNavBar = true;
    var x = document.getElementById("navBar");
    if (x.className === "navItems") {
      x.className += " responsive";

    } else {
      x.className = "navItems";
    }
  }

  navBarCollapse(): void {
    this.toggleNavBar = false;
    this.navBarResponsive();
  }

}
