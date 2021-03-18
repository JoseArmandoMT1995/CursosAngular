import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }
  };
  fakeData=[
    {
      name:"jose",
      lastName:"moreno",
      email:"mtjamx95@gmail.com",
      startDate:"23/02/1995"
    },
    {
      name:"armando",
      lastName:"moreno",
      email:"mtjamx95@gmail.com",
      startDate:"23/02/1995"
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  mandarEditar(item: any):void{
    this.navigationExtras.state.value= item;
    this.router.navigate(['edit'],this.navigationExtras);
  }
  
  mandarVer(item: any):void{
    this.navigationExtras.state.value= item;
    this.router.navigate(['details'],this.navigationExtras);
  }
  mandarEliminar(item: any):void{
    
    alert("mensaje Eliminado");
  }
}
