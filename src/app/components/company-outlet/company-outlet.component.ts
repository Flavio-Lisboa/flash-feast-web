import { Component, Input, OnInit } from '@angular/core';
import { HomeContent } from '../../interfaces/HomeContent';

@Component({
  selector: 'app-company-outlet',
  templateUrl: './company-outlet.component.html',
  styleUrls: ['./company-outlet.component.css']
})
export class CompanyOutletComponent implements OnInit {
  @Input() companyOutletData!: HomeContent;

  constructor() { }

  ngOnInit(): void {
  }

}
