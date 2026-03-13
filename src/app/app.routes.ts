import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { Login } from './pages/login/login'
import { EmployeeList } from './pages/employee-list/employee-list'
import { AddEmployee } from './pages/add-employee/add-employee'
import { EmployeeDetail } from './pages/employee-detail/employee-detail'

export const routes: Routes = [

 { path:'', redirectTo:'login', pathMatch:'full'},
 { path:'login', component: Login },
 { path:'employees', component: EmployeeList},
 { path:'add-employee', component: AddEmployee},
 { path:'employee/:username', component: EmployeeDetail}

]

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }