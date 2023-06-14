import { Component, OnInit } from '@angular/core';
import { HomeContent } from 'src/app/interfaces/HomeContent';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeContent: HomeContent[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getMenuData().subscribe((items) => {
      this.homeContent = items;
    });
  }
}
