import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }
  };
  employee =null;
  constructor(private router: Router) { 

    const navegation = this.router.getCurrentNavigation();
    this.employee= navegation?.extras?.state;
  }

  ngOnInit(): void {
  }
  mandarEditar():void{
    this.navigationExtras.state.value= this.employee;
    this.router.navigate(['edit'],this.navigationExtras);
  }


  retornoLista():void{
    this.router.navigate(['list']);
  }
  mandarEliminar():void{
    
    alert("mensaje Eliminado");
  }

}
