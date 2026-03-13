import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from '../../services/employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchData } from '../../services/search-data';

@Component({
  selector: 'app-employee-detail',
  imports: [DatePipe, CommonModule, MatButtonModule],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeDetail {

  employee:any

  constructor( 
    public search: SearchData,
    private route: ActivatedRoute, 
    private service: EmployeeService, 
    private location: Location
  ){}

  ngOnInit(){
    const username = this.route.snapshot.paramMap.get('username')
    this.employee = this.service.getEmployee(username!)
  }

  back(){
    this.location.back()
  }


}
