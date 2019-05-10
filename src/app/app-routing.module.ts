import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent       } from './components/table/table.component';
import { AddStudentComponent  } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { FacultyListComponent } from './components/faculty-list/faculty-list.component';
import { AddFacultyComponent  } from './components/add-faculty/add-faculty.component';
import { GroupsListComponent  } from './components/groups-list/groups-list.component';
import { AddGroupComponent    } from './components/add-group/add-group.component';
import { Page404Component     } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'dashboard',    component: TableComponent },
  { path: '',             component: TableComponent },
  { path: 'add_student',  component: AddStudentComponent },
  { path: 'edit_student', component: EditStudentComponent },
  { path: 'faculty',      component: FacultyListComponent },
  { path: 'log_in',       component: AddFacultyComponent }, 
  { path: 'add_faculty',  component: AddFacultyComponent },
  { path: 'groups',       component: GroupsListComponent },
  { path: 'add_groups',   component: AddGroupComponent },
  { path: '**',           component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
