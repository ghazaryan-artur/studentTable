import { Component, OnInit                  } from '@angular/core';
import { DataService                        } from 'src/app/service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router                             } from '@angular/router';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  constructor( private serviceVar:DataService,
               private router:Router) { }

  ngOnInit() { }

  public angularForm = new FormGroup({
    facultyId :new FormControl(1),
    groupName: new FormControl('',  [Validators.required, Validators.minLength(4)])
  }); 

  submit(a){
    if(this.angularForm.valid){
      for(let i=0;i< this.serviceVar.facultyList.length; i++){
        if(this.serviceVar.facultyList[i].id == a.value.facultyId){
          let newGroup: Object = {id: this.setId(a.value.facultyId, this.serviceVar.facultyList[i]), name: a.value.groupName }
          this.serviceVar.facultyList[i].groups.push(newGroup);
          console.log(this.serviceVar.facultyList[i].groups); 
          this.router.navigateByUrl("/groups");
          return; 
        }
      }
    }
  }
  setId(x, y){ 
    mainFor: for(let potentialId = x*100+1 ; ; potentialId++){ // cheked value of potentional ID
      for (let i = 0; i< y.groups.length; i++){ // ID values that we already have
        if( potentialId == y.groups[i].id){
          continue mainFor; // if we have coincidence
        }
      }
      return potentialId;
    } 
  }
}
