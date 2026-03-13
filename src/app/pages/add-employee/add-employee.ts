import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from'@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder,Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [
    ReactiveFormsModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule, 
    CommonModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddEmployee {

  maxDate = new Date()
  groups = [
    'HR','Finance','Engineering','IT','Marketing',
    'Operations','Legal','Admin','Sales','Support'
  ]
  form=this.fb.group({
    username:['',Validators.required],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    birthDate:['',Validators.required],
    basicSalary:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    status:['',Validators.required],
    group:['',Validators.required],
    description:['']
  })

  constructor(private fb:FormBuilder, private service:EmployeeService, private router:Router){}

  submit(){
    if(this.form.valid){
      this.service.addEmployee(this.form.value as any)
      this.router.navigate(['/employees'])
    }
  }
  back(){
    this.router.navigate(['/employees'])
  }

}
