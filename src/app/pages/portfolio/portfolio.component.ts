import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {CATEGORIES, MOBILE_BREAKPOINT, PORTFOLIOS, RESPONSIVE_OPTIONS, TABLE_BREAKPOINT} from "../../../data/constant";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit{

  private mobileBreakpoint = MOBILE_BREAKPOINT; // Max width for mobile view
  private tabletBreakpoint = TABLE_BREAKPOINT; // Max width for tablet view

  // Initial screen size category
  private currentCategory: 'mobile' | 'tablet' | 'desktop' = this.getCategory(window.innerWidth);

  isMobile = false
  categories = CATEGORIES
  portfolios = PORTFOLIOS

  // data = this.portfolios.filter(i => i.category_id === 1)

  // selected = 1;

  data = this.portfolios

  selected = null;

  currentPath = '';
  isHomePage = true;

  responsiveOptions = RESPONSIVE_OPTIONS

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
