import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  value = null;
  private isEmail=" /\S+@\S+\.\S+/";
  employeeForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value= navigation?.extras?.state;
  }

  ngOnInit(): void {
    this.initForm();
  }

  save():void{
    alert("save");
    console.log(this.employeeForm.value);
  }
  private initForm():void{
    this.employeeForm= this.fb.group({
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(this.isEmail)]],
      startDate:['',[Validators.required]],
    });
  }
}
