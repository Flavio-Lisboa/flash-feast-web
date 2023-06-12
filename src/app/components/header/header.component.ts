import { Component, OnInit } from '@angular/core';
import { faHome, faBagShopping, faReceipt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHome  = faHome;
  faBagShopping = faBagShopping
  faReceipt = faReceipt
  faMagnifyingGlass = faMagnifyingGlass

  constructor() { }

  ngOnInit(): void {
  }

}
