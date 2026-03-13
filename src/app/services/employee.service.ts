import { Injectable } from '@angular/core'
import { Employee } from '../models/employee/employee.model'

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  employees: Employee[] = []

  groups = [
    'HR','Finance','Engineering','IT','Marketing',
    'Operations','Legal','Admin','Sales','Support'
  ]

  constructor() {
    this.generateEmployees()
  }

  generateEmployees() {
    for (let i = 1; i <= 100; i++) {

      this.employees.push({
        username: 'user'+i,
        firstName: 'First'+i,
        lastName: 'Last'+i,
        email: `user${i}@company.com`,
        birthDate: new Date(1990,1,1),
        basicSalary: 5000+i,
        status: 'Active',
        group: this.groups[i % 10],
        description: 'Employee description'
      })
    }

  }

  getEmployees(){
    return this.employees
  }

  addEmployee(emp: Employee){
    this.employees.push(emp)
  }

  getEmployee(username: string){
    return this.employees.find(e => e.username === username)
  }

}