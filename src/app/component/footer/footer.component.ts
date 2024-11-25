import {AfterViewInit, ChangeDetectorRef, Component, HostListener, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit{

  @ViewChild('bg-footer-2') bgFooter2: any;

  isHomepage = true
  currentPath = '/home'
  private mobileBreakpoint = 768; // Max width for mobile view
  private tabletBreakpoint = 992; // Max width for tablet view

  // Initial screen size category
  private currentCategory: 'mobile' | 'tablet' | 'desktop' = this.getCategory(window.innerWidth);

  constructor(
    private router: Router,
    private ref: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.checkRouter()
    this.windowCheck();
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

  private handleResizeChange(newCategory: 'mobile' | 'tablet' | 'desktop') {
    // console.log(`Screen size category changed to: ${newCategory}`);
    // Implement any other logic needed when the screen size category changes
    // For example, you could adjust layout, reload components, etc.
    const bgFooter2 = document.getElementById('bgFooter2')
    const mawakaName = document.getElementById('mawakaName')
    const mawakaLogo = document.getElementById('mawakaLogo')

    if (newCategory === 'mobile' || newCategory === 'tablet') {
      // @ts-ignore
      bgFooter2.classList.add('darken')

      // @ts-ignore
      mawakaName.classList.remove('text-start')
      // @ts-ignore
      mawakaName.classList.add('text-center')
      // @ts-ignore
      mawakaLogo.classList.remove('text-end')
      // @ts-ignore
      mawakaLogo.classList.add('text-center')
      // @ts-ignore
      mawakaLogo.classList.add('mb-3')

      this.ref.detectChanges();
      return;
    }

    // @ts-ignore
    mawakaName.classList.remove('text-center')
    // @ts-ignore
    mawakaName.classList.add('text-start')
    // @ts-ignore
    mawakaLogo.classList.remove('text-center')
    // @ts-ignore
    mawakaLogo.classList.add('text-end')
    // @ts-ignore
    mawakaLogo.classList.remove('mb-3')
    // @ts-ignore
    bgFooter2.classList.remove('darken')

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
