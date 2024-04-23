import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isPositionAbsolute = false

  ngOnInit(): void {
    this.isPositionAbsolute = location.pathname === 'home'
  }

}
