import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHomepage = false
  currentPath = '/home'

  constructor(
    private router: Router
  ) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.currentPath = location.pathname
        this.isHomepage = this.currentPath === '/home'
      }
    })
  }

  ngOnInit(): void {
  }

}
