import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { Employee } from 'src/app/shared/models/employees.interface';

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
  employee:Employee =null;
  constructor(private router: Router) { 

    const navegation = this.router.getCurrentNavigation();
    this.employee= navegation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.employee === "undefined") {
      this.router.navigate(['list']);
    }else{
      //this.employeeForm.patchValue(this.employee);
    }
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
