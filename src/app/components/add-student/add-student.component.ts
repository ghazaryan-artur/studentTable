import { Component, OnInit                    } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Student                              } from '../../models/student';
import { DataService                          } from 'src/app/service/data.service';
import { Router                               } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  public angularForm: FormGroup;
  public curentFacGroups: Array<any>;
  public disabledVar = true;
  public norStd :Student;
  constructor(private FormBuilder: FormBuilder,
              private serviceVar:DataService,
              private router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    this.angularForm = this.FormBuilder.group({
      name: ['', Validators.required ],
      lastName: ['', Validators.required ],
      phone: ['', Validators.required ], 
      faculty:[''],
      group:[], 
      course:['']
    });
  }

  createStudentObject(){ 
    let currentStudent: Student = new Student(0,'','',0,'','',0,''); // zroyacnumenq objecte
    currentStudent = this.angularForm.getRawValue(); 
    currentStudent.shownStatus = true;
    currentStudent.id = this.setId();
    this.serviceVar.studentsData.push(currentStudent);    
    this.router.navigateByUrl("/dashboard");
  }
  setId(){
    mainFor: for(let potentialId = 1; potentialId < this.serviceVar.studentsData.length+3; potentialId++){
      console.log('potentional id is', potentialId);
      for (let i = 0; i< this.serviceVar.studentsData.length; i++){
        if( potentialId == this.serviceVar.studentsData[i].id){
          continue mainFor;
        }
      }
      return potentialId;
    }
  }

  getGroups(){
    for (let i = 0; i < this.serviceVar.facultyList.length; i++){
      if (this.serviceVar.facultyList[i].name == this.angularForm.get('faculty').value){
        this.curentFacGroups = this.serviceVar.facultyList[i].groups;
        document.getElementById('group').removeAttribute('disabled');
        return;
      }
    }
  }
}  
  