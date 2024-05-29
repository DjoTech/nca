import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit, ViewChild
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MOBILE_BREAKPOINT, PEOPLE, RESPONSIVE_OPTIONS} from "../../../data/constant";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit  {

  @ViewChild('btnLearnMore') btnLearnMore: any;

  private mobileBreakpoint = MOBILE_BREAKPOINT; // Max width for mobile view
  private tabletBreakpoint = 1280; // Max width for tablet view

  // Initial screen size category
  private currentCategory: 'mobile' | 'tablet' | 'desktop' = this.getCategory(window.innerWidth);

  people = PEOPLE
  responsiveOptions = RESPONSIVE_OPTIONS

  isMobile = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.windowCheck();
  }

  windowCheck() {
    const width = window.innerWidth;
    const category = this.getCategory(width);
    this.handleResizeChange(category)
  }

  // Function to get the screen size category
  private getCategory(width: number): 'mobile' | 'tablet' | 'desktop' {
    if (width < this.mobileBreakpoint) {
      return 'mobile';
    } else if (width < this.tabletBreakpoint) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }


  // Function to handle actions when resize causes a category change
  private handleResizeChange(newCategory: 'mobile' | 'tablet' | 'desktop') {
    // console.log(`Screen size category changed to: ${newCategory}`);
    // Implement any other logic needed when the screen size category changes
    // For example, you could adjust layout, reload components, etc.
    if (newCategory === 'mobile' || newCategory === 'tablet' || (newCategory === 'desktop' && window.innerWidth <= this.tabletBreakpoint) ) {
      // @ts-ignore
      btnLearnMore.classList.add('btn-sm')
      // @ts-ignore
      btnLearnMore.classList.remove('p-md-3')
      this.isMobile = true;
      this.ref.detectChanges();
      return;
    }
    // @ts-ignore
    btnLearnMore.classList.remove('btn-sm')
    // @ts-ignore
    btnLearnMore.classList.add('p-md-3')
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
    this.currentCategory = newCategory;
    this.handleResizeChange(newCategory);
  }



}
