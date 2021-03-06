import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employees.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee;
  private isEmail=" /\S+@\S+\.\S+/";
  employeeForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.employee= navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    
    if (typeof this.employee === "undefined") {
      this.router.navigate(['new']);
    }else{
      this.employeeForm.patchValue(this.employee);
    }
  }

  save():void{
    alert("save");
    console.log(this.employeeForm.value);
  }
  retornoLista():void{
    this.router.navigate(['list']);
  }
  private initForm():void{
    this.employeeForm= this.fb.group({
      name:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(this.isEmail)]],
      startDate:['',[Validators.required]],
    });
  }

}
