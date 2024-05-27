import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit{

  private mobileBreakpoint = 768; // Max width for mobile view
  private tabletBreakpoint = 992; // Max width for tablet view

  // Initial screen size category
  private currentCategory: 'mobile' | 'tablet' | 'desktop' = this.getCategory(window.innerWidth);

  isMobile = false


  categories = [
    // {
    //   category_id: null,
    //   category_name: "All Category"
    // },
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

  data = this.portfolios.filter(i => i.category_id === 1)

  selected = 1;

  currentPath = '';
  isHomePage = true;

  responsiveOptions = [
    {
      breakpoint: '1920px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.checkRouter()
    this.windowCheck();
  }

  filter(item: any) {
    this.selected = item.category_id
    if (item.category_id) {
      this.data =  this.portfolios.filter(portfolio => portfolio.category_id === item.category_id)
    } else {
      this.data = this.portfolios
    }
    this.ref.detectChanges()
  }

  checkRouter() {
    this.currentPath = location.pathname
    this.isHomePage = (this.currentPath === '/home' || this.currentPath === '/mawaka-venture/home')
  }

  windowCheck() {
    const width = window.innerWidth;
    const category = this.getCategory(width);
    this.handleResizeChange(category)
  }

  private getCategory(width: number): 'mobile' | 'tablet' | 'desktop' {
    if (width < this.mobileBreakpoint) {
      return 'mobile';
    } else if (width < this.tabletBreakpoint) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  private handleResizeChange(newCategory: 'mobile' | 'tablet' | 'desktop') {
    // console.log(`Screen size category changed to: ${newCategory}`);
    // Implement any other logic needed when the screen size category changes
    // For example, you could adjust layout, reload components, etc.

    if (newCategory === 'mobile' || newCategory === 'tablet') {
      this.isMobile = true;
      this.ref.detectChanges();
      return;
    }

    this.isMobile = false;
    this.ref.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any = null) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // console.log(`Window resized to width: ${width}, height: ${height}`);

    // Get the new screen size category
    const newCategory = this.getCategory(width);

    // Perform actions if the category changes
    if (newCategory !== this.currentCategory) {
      this.currentCategory = newCategory;
      this.handleResizeChange(newCategory);
    }
  }

}
