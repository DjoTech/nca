import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MOBILE_BREAKPOINT, PEOPLE, RESPONSIVE_OPTIONS, TABLE_BREAKPOINT} from "../../../data/constant";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent implements AfterViewInit, OnInit {

  @ViewChild('blueArrow') blueArrow!: ElementRef;
  @ViewChild('greenArrow') greenArrow!: ElementRef;
  @ViewChild('peoplesSection') peoplesSection!: ElementRef;


  responsiveOptions = RESPONSIVE_OPTIONS
  people = PEOPLE

  mobileBreakpoint = MOBILE_BREAKPOINT;
  tabletBreakpoint = TABLE_BREAKPOINT;
  name: string | null = null;
  // Initial screen size category
  private currentCategory: 'mobile' | 'tablet' | 'desktop' = this.getCategory(window.innerWidth);

  isMobile=false;

  person: any = {};
  person_index: { page: any } = { page: 0 }
  first_person_carousel: number = 0;

  constructor(
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute
  )
  {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.windowCheck();
    this.getParams();
  }

  getParams(): void {
    this.route.queryParams.subscribe(params => {
      this.scrollToTop();
      this.name = params['name'] || null;

      const scrollToPeoples = params['scrollToPeoples'] === 'true';
      if (scrollToPeoples && this.peoplesSection&& !this.isMobile) {
        this.people[0].expanded=false
        this.people[0].active=false
        if(this.name){
          this.person= this.people.find((p: any) => p.name === this.name)
          if (this.person) {
            this.person.expanded = true;  // Update expanded value to true
            this.onClickType(this.person)
            setTimeout(() => {
              this.scrollToSection()
              this.ref.detectChanges();
            }, 1000);

          }

        }
      }
      if((scrollToPeoples && this.peoplesSection && this.isMobile)){
        if(this.name){
          this.person_index.page= this.people.findIndex((p: any) => p.name === this.name)
          this.person= this.people.find((p: any) => p.name === this.name)
          if (this.person_index && this.person) {
            this.onClickType(this.person)
            this.onPageChange(this.person_index)
            this.first_person_carousel =this.person_index.page
            setTimeout(() => {
                this.scrollToSection()
                this.ref.detectChanges();
            }, 1000);
          }
        }
      }
    });
  }

  scrollToTop(): void  {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
    this.ref.detectChanges();
  }

  scrollToSection() {
    if (this.peoplesSection && this.peoplesSection.nativeElement) {
      this.peoplesSection.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
    this.ref.detectChanges();
  }

  windowCheck() {
    const width = window.innerWidth;
    const category = this.getCategory(width);
    this.handleResizeChange(category)
  }

  onPageChange(item: any) {
    if (this.people[item.page] === undefined) {
      this.person = this.people[0]
    } else {
      this.person = this.people[item.page]
    }
    this.ref.detectChanges();
  }

  onClickType(item: any): void {
    this.people.forEach((i: any) => i.expanded = i.key === item.key)
    this.person = this.people.find((key: any) => key.key === item.key);
    this.ref.detectChanges()
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
    if (newCategory === 'mobile' || newCategory === 'tablet') {
      this.blueArrow.nativeElement.src = 'assets/img/Arrow_blue_mobile.png'
      this.greenArrow.nativeElement.src = 'assets/img/Arrow_green.png';
      this.blueArrow.nativeElement.classList.add('mb-5')
      this.greenArrow.nativeElement.classList.add('mb-5')
      this.isMobile=true
      this.ref.detectChanges();
      return;
    }

    this.blueArrow.nativeElement.src = 'assets/img/about-us-1.png'
    this.greenArrow.nativeElement.src = 'assets/img/about-us-2.png'
    this.blueArrow.nativeElement.classList.remove('mb-5')
    this.greenArrow.nativeElement.classList.remove('mb-5')
    this.isMobile=false
    this.person = this.people[0]
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
