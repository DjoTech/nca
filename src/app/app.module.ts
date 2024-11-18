import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {HomeComponent} from "./pages/home/home.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ProductComponent} from "./pages/product/product.component";
import {InformationComponent} from "./pages/information/information.component";
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ProductComponent,
    InformationComponent,
    ContactUsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule,
    TagModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
