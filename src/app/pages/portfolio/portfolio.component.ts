import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnChanges{

  @Input() useClass = true

  portfolios = [
    {
      name: "PT. Layton Enterprise",
      image: "assets/Materi Website Mawaka/Logo Layton Enterprise.svg"
    },
    {
      name: "PT. Multi Bmitra Sejahtera",
      image: "assets/Materi Website Mawaka/Logo Multi Bmitra Sejahtera.svg"
    },
    {
      name: "PT. Nuansa Chatur Anugrah",
      image: "assets/Materi Website Mawaka/Logo NCA.svg"
    },
    {
      name: "PT. Panca Pasifik Indonesia",
      image: "assets/Materi Website Mawaka/Logo PT. Panca Pasifik Indonesia.svg"
    },
    {
      name: "PT. Barack Legal Indonesia",
      image: "assets/Materi Website Mawaka/Logo Barack Legal Indonesia.svg"
    },
    {
      name: "PT. Finnet Indonesia",
      image: "assets/Materi Website Mawaka/Logo Finnet.svg"
    },
    {
      name: "HeloPro",
      image: "assets/Materi Website Mawaka/Logo Helopro.svg"
    },
  ]

  ngOnChanges(changes: SimpleChanges): void {
    // @ts-ignore
    if (changes.useClass) {
      // @ts-ignore
      this.useClass = changes.useClass.currentValue
    }
  }


}
