import { Component, OnInit                  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService                        } from 'src/app/service/data.service';
import { Router                             } from '@angular/router';


@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
  public angularForm = new FormGroup({
    facultyName : new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  constructor(private serviceVar: DataService,
              private router:Router) { }

  ngOnInit() {
  }
  
  submit(){ 
    if(this.angularForm.valid){
      let newFaculty = {id: 0, name: '', groups: []};
      newFaculty.id = this.setId();
      newFaculty.name = this.angularForm.value.facultyName; 
      this.serviceVar.facultyList.push(newFaculty);
      this.router.navigateByUrl("/faculty"); 
    }
  } 
  setId(){
    mainFor: for(let potentialId = 1;potentialId < this.serviceVar.facultyList.length+3 ;potentialId++){ // cheked value of potentional ID
      for (let i = 0; i< this.serviceVar.facultyList.length; i++){ // ID values that we already have
        if( potentialId == this.serviceVar.facultyList[i].id){
          continue mainFor; // if we have coincidence
        }
      }
      return potentialId;
    } 
  }
}
