import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{

  categories = [
    {
      category_id: null,
      category_name: "All Category"
    },
    {
      category_id: 1,
      category_name: "Construction"
    },
    {
      category_id: 2,
      category_name: "Telco - Infrastructure"
    },
    {
      category_id: 3,
      category_name: "Power Solution"
    },
    {
      category_id: 4,
      category_name: "Logistics"
    },
    {
      category_id: 5,
      category_name: "Business Services"
    },
    // {
    //   category_id: 6,
    //   category_name: "Fintech"
    // },
  ]

  portfolios = [
    {
      name: "PT. Layton Enterprise",
      image: "assets/Materi Website Mawaka/Logo Layton Enterprise.svg",
      link: "https://layton.co.id",
      category_id: 1,
    },
    {
      name: "PT. Multi Bmitra Sejahtera",
      image: "assets/Materi Website Mawaka/Logo Multi Bmitra Sejahtera.svg",
      link: "https://multibmitrasejahtera.com",
      category_id: 2,
    },
    {
      name: "PT. Profesional Internet Indonesia",
      image: "assets/Materi Website Mawaka/Logo Pronet.png",
      link: "https://pronet.id",
      category_id: 2,
    },
    {
      name: "PT. Nuansa Chatur Anugrah",
      image: "assets/Materi Website Mawaka/Logo NCA.svg",
      link: "",
      category_id: 3,
    },
    {
      name: "PT. Panca Pasifik Indonesia",
      image: "assets/Materi Website Mawaka/Logo PT. Panca Pasifik Indonesia.svg",
      link: "https://pancatrans.com",
      category_id: 4,
    },
    {
      name: "PT. Barack Legal Indonesia",
      image: "assets/Materi Website Mawaka/Logo Barack Legal Indonesia.svg",
      link: "https://baracklegal.com",
      category_id: 5,
    },
    // {
    //   name: "PT. Finnet Indonesia",
    //   image: "assets/Materi Website Mawaka/Logo Finnet.svg",
    //   category_id: 6,
    // },
    // {
    //   name: "HeloPro",
    //   image: "assets/Materi Website Mawaka/Logo Helopro.svg",
    //   category_id: 5,
    // },
  ]

  data = this.portfolios

  selected = null;

  currentPath = '';
  isHomePage = true;

  constructor() {
  }

  ngOnInit() {
    this.checkRouter()
  }

  filter(item: any) {
    this.selected = item.category_id
    if (item.category_id) {
      this.data =  this.portfolios.filter(portfolio => portfolio.category_id === item.category_id)
    } else {
      this.data = this.portfolios
    }
  }

  checkRouter() {
    this.currentPath = location.pathname
    this.isHomePage = (this.currentPath === '/home' || this.currentPath === '/mawaka-venture/home')
  }

}
