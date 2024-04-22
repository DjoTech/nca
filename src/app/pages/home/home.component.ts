import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persons = [
    {
      name: "Ridho Singgih",
      position: "Founding Partner",
      image: "assets/Materi Website Mawaka/Foto Ridho Singgih Setiawan.jpeg"
    },
    {
      name: "Handy Setianto",
      position: "Founding Partner",
      image: "assets/Materi Website Mawaka/Foto Handy Setianto.jpeg"
    },
    {
      name: "Edgar Handoko",
      position: "Founding Partner",
      image: "assets/Materi Website Mawaka/Foto Edgar Handoko.jpeg"
    },
    {
      name: "Alfian Rosadi",
      position: "Founding Partner",
      image: "assets/Materi Website Mawaka/Foto Alfian Rosadi.jpeg"
    },
    {
      name: "Naufal Aji",
      position: "Founding Partner",
      image: "assets/Materi Website Mawaka/Foto Naufal Aji.png"
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
