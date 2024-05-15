import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent implements OnInit{


  @ViewChild('blueArrow') blueArrow: any;
  @ViewChild('greenArrow') greenArrow: any;

  placeholder = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci beatae blanditiis, consequatur doloremque eaque eos ex fugit id illo incidunt ipsum minus nesciunt nihil nostrum odio optio placeat quaerat quia repellendus rerum sunt voluptatibus. Distinctio, dolores ea eum hic impedit iste libero, non odio porro quae quas quasi quidem quos repellendus sit soluta veniam vero. Accusamus aliquam blanditiis cum exercitationem illum ipsam iusto labore libero magni modi nulla officiis omnis qui quibusdam sint, temporibus velit veniam voluptatum? Architecto commodi consequatur deleniti earum fugiat, iste itaque iusto maiores maxime nemo nesciunt nobis odio, qui quia sapiente ut veniam voluptatibus!"

  peoples = [
    {
      name: 'Ridho Singgih',
      role: 'Managing Partner & CEO',
      image:'assets/Materi Website Mawaka/Foto Ridho Singgih Setiawan.jpeg',
      key: "RIDHO_SINGGIH",
      expanded: true
    },
    {
      name: 'Handy Setianto',
      role: 'Founding Partner',
      image:'assets/Materi Website Mawaka/Foto Handy Setianto.jpeg',
      key: "HANDY_SETIANTO",
      expanded: false
    },
    {
      name: 'Edgar Handoko',
      role: 'Chief of Internal Affairs & Compliance',
      image:'assets/Materi Website Mawaka/Foto Edgar Handoko.jpeg',
      key: "EDGAR_HANDOKO",
      expanded: false
    },
    {
      name: 'Alfian Rosaldi',
      role: 'Chief of Investment',
      image:'assets/Materi Website Mawaka/Foto Alfian Rosadi.jpeg',
      key: "ALFIAN_ROSALDI",
      expanded: false
    },
    {
      name: 'Naufal Aji',
      role: 'Chief of Investment',
      image:'assets/Materi Website Mawaka/Naufal.jpg',
      key: "NAUFAL_AJI",
      expanded: false
    }
  ];

  lists = [
    {
      type: "RIDHO_SINGGIH",
      active: true,
      contents: "Ridho Singgih is a seasoned professional with a multifaceted background in business strategy, marketing, and service management. Graduating from the prestigious Business School at Bandung Institute of Technology, Ridho embarked on a dynamic career journey that encompassed diverse roles and industries. With three years of experience at MarkPlus Consulting, specializing in marketing, strategy management, and service management, Ridho honed skills critical for navigating complex business landscapes. Transitioning to the burgeoning e-commerce sector, Ridho spent three years at a top leading platform, gaining insights into digital commerce and operational efficiency. Following this, Ridho led a telecommunication construction company for nearly five years, demonstrating exceptional leadership as a business owner. Additionally, Ridho is an active member of the Indonesia Marketing Association, contributing to the advancement of marketing practices and industry knowledge. As a Co-Founder of Mawaka Ventures, Ridho leverages this wealth of experience to drive strategic investment and foster sustainable growth for clients and partners.",
      education:[
        'assets/education-itb.webp'
      ],
    },
    {
      type: "HANDY_SETIANTO",
      active: false,
      contents: this.placeholder,
      education:[

      ],
    },
    {
      type: "EDGAR_HANDOKO",
      active: false,
      contents: "As the Chief of Internal Affairs & Compliance of Mawaka Ventures, Edgar Handoko takes pride in providing the best yet fast services to Mawaka’s internal affairs and its clients which consist of legal services, human resources compliances, licences regulatory overview, internal and external due diligence, and many others. With more than 6 years of experiences, Edgar has been involved in various corporate legal transactions and dispute resolution where he has represented numerous Indonesian and international company. To maximize his quality services, Edgar has advanced attorney’s licenses such as: (i) Receiver and Administrator licensed under the Indonesian Association of Receiver and Administrator, (ii) Tax Attorneys licensed under the Tax Court of the Republic Indonesia, and (ii) Mediator licensed under the Jakarta District Courts.       ",
      education:[
        "assets/Materi Website Mawaka/logo-ugm.png"
      ],
    },
    {
      type: "ALFIAN_ROSALDI",
      active: false,
      contents: "As Chief of Investment at Mawaka Ventures. He studied at Gadjah Mada University majoring in a double degree: Master of Business Administration (MBA) and Wealth Management by CWMA. Before joining Mawaka Ventures, he served as Personal Wealth Manager at Valbury Asia Futures specializing in commodity trading and Contracts For Differences (CFD); Senior Relationship Manager at KB Bukopin Bank with a focus on providing credit to corporate; and Internal Control Manager at Trinusa Group, a company operating in the nickel mining industry.",
      education:[
        "assets/Materi Website Mawaka/logo-ugm.png"
      ],
    },
    {
      type: "NAUFAL_AJI",
      active: false,
      contents: "As the Chief of Investment Officer of Mawaka Ventures, Naufal Aji holds a Bachelor of Industrial Engineering from the University of Indonesia and a Master of Business Management from The University of Warwick. With more than five years of experience as a Management Consultant at Accenture and more than two years as a director of a fintech company at PT Finnet Indonesia, Naufal has honed his expertise in strategic investment and financial planning. His professional journey is complemented by his past involvement as a member of the Indonesian Students Association in London, highlighting his commitment to leadership and international collaboration.",
      education:[
        "assets/Materi Website Mawaka/logo ui.png"
      ],
    },
  ]

  contents: any = this.lists[0]
  detail_people : any = this.peoples[0]
  blue_arrow = "assets/about-us-1.png"
  green_arrow = "assets/about-us-2.png"
  isMobile=false;
  constructor(
    private ref: ChangeDetectorRef,
  )
  {
    // this.updateImage();
  }

  // updateImage() {
  //   if (window.innerWidth < 780) {
  //     this.blue_arrow = "assets/Arrow_blue_mobile.png"
  //     this.green_arrow = "assets/Arrow_green.png"
  //     this.isMobile = true;
  //   } else {
  //     this.isMobile = false;
  //   }
  // }

  onClickType(item: any): void {
    this.peoples.forEach(i => i.expanded = i.key === item.key)
    this.contents =  this.lists.find(type => type.type === item.key)
    this.detail_people = this.peoples.find(key => key.key === item.key)
    this.ref.detectChanges()
  }
  expandItem(item: any) {
    item.expanded = true;
  }

  collapseItem(item: any) {
    item.expanded = false;
  }

  ngOnInit(): void {
    console.log(this.blueArrow, document.getElementById('blueArrow'))
  }

  private mobileBreakpoint = 768; // Max width for mobile view
  private tabletBreakpoint = 992; // Max width for tablet view

  // Initial screen size category
  private currentCategory: 'mobile' | 'tablet' | 'desktop' = this.getCategory(window.innerWidth);

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
      this.blueArrow.nativeElement.src = 'assets/Arrow_blue_mobile.png'
      this.greenArrow.nativeElement.src = 'assets/Arrow_green.png';
      this.isMobile=true
      this.ref.detectChanges();
      return;
    }

    this.blueArrow.nativeElement.src = 'assets/about-us-1.png'
    this.greenArrow.nativeElement.src = 'assets/about-us-2.png'
    this.isMobile=false
    this.ref.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
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
