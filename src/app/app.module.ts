import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {HomeComponent} from "./pages/home/home.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {StrategyComponent} from "./pages/strategy/strategy.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    PortfolioComponent,
    HomeComponent,
    ContactUsComponent,
    StrategyComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterModule,
        ReactiveFormsModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
