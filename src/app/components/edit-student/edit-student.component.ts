import { Component, OnInit                  } from '@angular/core';
import { DataService                        } from 'src/app/service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router                             } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  public angularForm: FormGroup;
  public curentFacGroups: Array<any>;
  public currentId: number;
  constructor(private serviceVar:DataService,
              private FormBuilder: FormBuilder,
              private router: Router ) { 
    this.findCorrectStudent();
    this.createForm(this.currentId); 
  }

  ngOnInit() {
    this.getGroups();

  }


  createForm(i) {
    this.angularForm = this.FormBuilder.group({
      studentName: [this.serviceVar.studentsData[i].name, Validators.required ],
      lastName: [this.serviceVar.studentsData[i].lastName, Validators.required ],
      phone: [this.serviceVar.studentsData[i].phone, Validators.required ],
                  // Validators.pattern('^[a-zA-Z]+$')],
      faculty:[this.serviceVar.studentsData[i].faculty],
      group:[this.serviceVar.studentsData[i].group], 
      course:[this.serviceVar.studentsData[i].course]
    });
  }

  findCorrectStudent(){
    for (let i = 0; i < this.serviceVar.studentsData.length; i++ ){
      if (this.serviceVar.studentToEditId == this.serviceVar.studentsData[i].id){
        this.currentId = i;
       return;
      }
    }
  }

  getGroups(){
    for (let i = 0; i < this.serviceVar.facultyList.length; i++){
      if (this.serviceVar.facultyList[i].name == this.angularForm.get('faculty').value){
        this.curentFacGroups = this.serviceVar.facultyList[i].groups;
        return;
      }
    }
  }

  changeStudentObject(i){
    this.serviceVar.studentsData[i].name =  this.angularForm.get('studentName').value;
    this.serviceVar.studentsData[i].lastName = this.angularForm.get('lastName').value;
    this.serviceVar.studentsData[i].phone = this.angularForm.get('phone').value;
    this.serviceVar.studentsData[i].faculty = this.angularForm.get('faculty').value;
    this.serviceVar.studentsData[i].group = this.angularForm.get('group').value;
    this.serviceVar.studentsData[i].course = this.angularForm.get('course').value; // ID is not changed
    this.router.navigateByUrl("/dashboard");  
  }
}
