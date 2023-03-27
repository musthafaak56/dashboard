import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadEmployeeComponent } from './lead-employee/lead-employee.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'add-employee',component:AddEmployeeComponent
  },
  {
    path:'lead-employee',component:LeadEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
