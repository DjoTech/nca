import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persons = [
    {
      name: "Ridho Singgih",
      position: "Managing Partner & CEO",
      image: "assets/Materi Website Mawaka/Foto Ridho Singgih Setiawan.jpeg"
    },
    {
      name: "Handy Setianto",
      position: "Founding Partner",
      image: "assets/Materi Website Mawaka/Foto Handy Setianto.jpeg"
    },
    {
      name: "Edgar Handoko",
      position: "Chief of Internal Affairs & Compliance",
      image: "assets/Materi Website Mawaka/Foto Edgar Handoko.jpeg"
    },
    {
      name: "Alfian Rosadi",
      position: "Chief of Investment",
      image: "assets/Materi Website Mawaka/Foto Alfian Rosadi.jpeg"
    },
    {
      name: "Naufal Aji",
      position: "Chief of Investment",
      image: "assets/Materi Website Mawaka/Naufal.jpg"
    },
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this.router.navigate(['./portfolio'], {relativeTo: this.route})
  }

}
