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
  ) {}

  ngOnInit(): void {
    this.checkRouter()
  }

  checkRouter() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.currentPath = location.pathname
        if (this.currentPath === '/home' || this.currentPath === '/mawaka-venture/home') {
          document.body.style.backgroundColor = 'white';
        } else {
          document.body.style.backgroundColor = '#EDF1F5';
        }
        this.isHomepage = (this.currentPath === '/home' || this.currentPath === '/mawaka-venture/home')
      }
    })
  }

}
