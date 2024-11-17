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
export class HomeComponent implements OnInit  {

  items = {
    business_line: [
      {
        name: "DC Power Supply",
        img: "assets/img/home/dc-power-supply.png"
      },
      {
        name: "Battery",
        img: "assets/img/home/battery.png"
      },
      {
        name: "Generator",
        img: "assets/img/home/generator.png"
      },
      {
        name: "LV Switchboard",
        img: "assets/img/home/lv-switchboard.png"
      },
      {
        name: "MV Switchgear",
        img: "assets/img/home/mv-switchgear.png"
      },
      {
        name: "Solar Panel",
        img: "assets/img/home/solar-panel.png"
      },
      {
        name: "HV Substation",
        img: "assets/img/home/hv-substation.png"
      },
    ],
    solutions: [
      {
        name: "Cyber Security",
        img: "assets/img/home/cyber-security.png"
      },
      {
        name: "Data Center",
        img: "assets/img/home/data-center.png"
      },
      {
        name: "Starlink",
        img: "assets/img/home/starlink.png"
      },
      {
        name: "FTH",
        img: "assets/img/home/fth.png"
      },
      {
        name: "Telecommunication",
        img: "assets/img/home/telecommunication.png"
      },
      {
        name: "Fiber Optic",
        img: "assets/img/home/fiber-optic.png"
      },
      {
        name: "Radio Link",
        img: "assets/img/home/radio-link.png"
      },
      {
        name: "Manage Service",
        img: "assets/img/home/manage-service.png"
      },
    ],
    customers: [
      {
        name: "Telom Indonesia",
        img: "assets/img/home/telkom-indonesia.png"
      },
      {
        name: "Telomsat",
        img: "assets/img/home/telkomsat.png",
      },
      {
        name: "Telom Infra",
        img: "assets/img/home/telkom-infra.png",
      },
      {
        name: "Mitratel",
        img:   "assets/img/home/mitratel.png",
      },
      {
        name: "Finnet",
        img: "assets/img/home/finnet.png",
      },
    ]
  }

  responsiveOptions = [
    {
      breakpoint: '1920px',
      numVisible: 5,
      numScroll: 5
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
  ]

  constructor() {
  }

  ngOnInit() {
  }



}
