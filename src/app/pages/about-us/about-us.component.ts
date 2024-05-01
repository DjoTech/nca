import { ChangeDetectionStrategy, ChangeDetectorRef,Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {

  placeholder = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci beatae blanditiis, consequatur doloremque eaque eos ex fugit id illo incidunt ipsum minus nesciunt nihil nostrum odio optio placeat quaerat quia repellendus rerum sunt voluptatibus. Distinctio, dolores ea eum hic impedit iste libero, non odio porro quae quas quasi quidem quos repellendus sit soluta veniam vero. Accusamus aliquam blanditiis cum exercitationem illum ipsam iusto labore libero magni modi nulla officiis omnis qui quibusdam sint, temporibus velit veniam voluptatum? Architecto commodi consequatur deleniti earum fugiat, iste itaque iusto maiores maxime nemo nesciunt nobis odio, qui quia sapiente ut veniam voluptatibus!"

  peoples = [
    {
      name: 'Ridho Singgih',
      role: 'Founding Partner',
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
      role: 'Founding Partner',
      image:'assets/Materi Website Mawaka/Foto Edgar Handoko.jpeg',
      key: "EDGAR_HANDOKO",
      expanded: false
    },
    {
      name: 'Alfian Rosaldi',
      role: 'Founding Partner',
      image:'assets/Materi Website Mawaka/Foto Alfian Rosadi.jpeg',
      key: "ALFIAN_ROSALDI",
      expanded: false
    },
    {
      name: 'Naufal Aji',
      role: 'Founding Partner',
      image:'assets/Materi Website Mawaka/Foto Ridho Singgih Setiawan.jpeg',
      key: "NAUFAL_AJI",
      expanded: false
    }
  ];

  lists = [
    {
      type: "RIDHO_SINGGIH",
      active: true,
      contents: this.placeholder,
      education:[

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
      contents: this.placeholder,
      education:[

      ],
    },
    {
      type: "ALFIAN_ROSALDI",
      active: false,
      contents: this.placeholder,
      education:[

      ],
    },
    {
      type: "NAUFAL_AJI",
      active: false,
      contents: this.placeholder,
      education:[

      ],
    },
  ]

  contents: any = this.lists[0].contents
  detail_people : any = this.peoples[0]

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }

  onClickType(item: any): void {
    this.peoples.forEach(i => i.expanded = i.key === item.key)
    this.contents =  this.lists.find(type => type.type === item.key)?.contents
    this.detail_people = this.peoples.find(key => key.key === item.key)
    this.ref.detectChanges()
  }
  expandItem(item: any) {
    item.expanded = true;
  }

  collapseItem(item: any) {
    item.expanded = false;
  }

}
