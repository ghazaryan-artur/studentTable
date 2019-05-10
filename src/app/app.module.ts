import { BrowserModule                    } from '@angular/platform-browser';
import { NgModule                         } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule                 } from './app-routing.module';
import { AppComponent                     } from './app.component';
import { NavbarComponent                  } from './components/navbar/navbar.component';
import { DataService                      } from './service/data.service';
import { TableComponent                   } from './components/table/table.component';
import { MainComponent                    } from './components/main/main.component';
import { AddStudentComponent              } from './components/add-student/add-student.component';
import { EditStudentComponent             } from './components/edit-student/edit-student.component';
import { FacultyListComponent             } from './components/faculty-list/faculty-list.component';
import { AddFacultyComponent              } from './components/add-faculty/add-faculty.component';
import { AddGroupComponent                } from './components/add-group/add-group.component';
import { GroupsListComponent              } from './components/groups-list/groups-list.component';
import { Page404Component                 } from './components/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    MainComponent, 
    AddStudentComponent,
    EditStudentComponent,
    FacultyListComponent,
    AddFacultyComponent,
    AddGroupComponent,
    GroupsListComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// https://demos.creative-tim.com/material-dashboard-pro-angular2/charts
// https://appdividend.com/2018/11/04/angular-7-crud-example-mean-stack-tutorial/