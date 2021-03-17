import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  value =null;
  constructor(private router: Router) { 

    const navegation = this.router.getCurrentNavigation();
    this.value= navegation?.extras?.state;
  }

  ngOnInit(): void {
  }

}
