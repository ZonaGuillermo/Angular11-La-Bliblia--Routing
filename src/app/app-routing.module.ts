import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/routing/employee/employee.component';
import { AboutComponent } from './components/routing/about/about.component';
import { ContactComponent } from './components/routing/contact/contact.component';
import { HomeComponent } from './components/routing/home/home.component';
import { ProjectsComponent } from './components/routing/employee/projects/projects.component';
import { CurriculumComponent } from './components/routing/employee/curriculum/curriculum.component';
import { Error404Component } from './components/routing/error404/error404.component';
import { RandomGuard } from './guards/random.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [RandomGuard] },
  {
    path: 'employee/:employeeId', component: EmployeeComponent, children:
      [
        { path: '', pathMatch: 'full',redirectTo: 'projects' },
        { path: 'projects', component: ProjectsComponent },
        { path: 'curriculum', component: CurriculumComponent }
      ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
