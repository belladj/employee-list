import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, MatSortHeader } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { Employee } from '../../models/employee/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchData } from '../../services/search-data';

@Component({
  selector: 'app-employee-list',
  imports: [
    RouterModule, 
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortHeader,
    FormsModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeList implements OnInit {

  displayedColumns = ['username','name','email', 'group', 'actions']
  dataSource!: MatTableDataSource<Employee>
  filterName = this.search.name
  filterGroup = this.search.group

  @ViewChild(MatPaginator,  {static: false}) paginator!: MatPaginator
  @ViewChild(MatSort,  {static: false}) sort!: MatSort

  constructor(private service: EmployeeService, public search: SearchData){
    this.dataSource = new MatTableDataSource(service.getEmployees())
  }

  ngOnInit() {
    this.applyFilter();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ngOnDestroy() {
    this.search.name = this.filterName
    this.search.group = this.filterGroup
  }

  applyFilter(){
    this.search.name = this.filterName
    this.search.group = this.filterGroup
    this.dataSource.filterPredicate=(data,filter)=>{
      const obj=JSON.parse(filter)
      return data.firstName.toLowerCase().includes(obj.name) && data.group.toLowerCase().includes(obj.group)
    }
    this.dataSource.filter=JSON.stringify({
      name:this.filterName.toLowerCase(),
      group:this.filterGroup.toLowerCase()
    })
  }

  delete(){
    alert("Employee Deleted")
  }

  edit(){
    alert("Edit clicked")
  }

}
