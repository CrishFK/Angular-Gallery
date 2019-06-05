import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navBarResponsive(): void {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
      x.className += " responsive";
    } else {
      x.className = "rc_nav";
    }
  }

}
