import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/routing/home/home.component';
import { AboutComponent } from './components/routing/about/about.component';
import { ContactComponent } from './components/routing/contact/contact.component';
import { Error404Component } from './components/routing/error404/error404.component';
import { RoutingComponent } from './components/routing/routing.component';
import { EmployeeComponent } from './components/routing/employee/employee.component';
import { CurriculumComponent } from './components/routing/employee/curriculum/curriculum.component';
import { ProjectsComponent } from './components/routing/employee/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Error404Component,
    RoutingComponent,
    EmployeeComponent,
    CurriculumComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
