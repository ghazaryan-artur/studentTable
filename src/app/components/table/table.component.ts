import { Component, OnInit  } from '@angular/core';
import { DataService        } from 'src/app/service/data.service';
import { Router             } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public nowSorted:         string = 'id2';
  public studentToDeleteId: number;
  public searchObj:         Object ={ };
  public classToRemove:     string = 'id';


  constructor(private serviceVar:DataService,
              private router: Router) {}

  ngOnInit(){
    this.sorting('id'); 
  }

  sorting(sortingProp){
    if(this.nowSorted != sortingProp && this.nowSorted != (sortingProp + '2')){ // check is elem sorting first time
      document.getElementById(this.classToRemove).removeAttribute('class') // delete opacity 1 class from element
    } 
    if(this.nowSorted != sortingProp){ // check is it Property sorting for ODD time
      this.nowSorted = sortingProp;
      document.getElementById(sortingProp).setAttribute('class', 'setOpacityA');
      this.serviceVar.studentsData.sort(function compare(a, b) {
        if (a[sortingProp]<b[sortingProp]) {
          return -1;
        }
        if (a[sortingProp]>b[sortingProp]) {
          return 1; 
        }
        return 0;
      } );
    } else { // check is it Property sorting for EVEN time
      document.getElementById(sortingProp).setAttribute('class', 'setOpacityB');
      this.nowSorted = sortingProp + '2';
      this.serviceVar.studentsData.sort(function compare(a, b) {
        if (a[sortingProp]>b[sortingProp]) {
          return -1;
        }
        if (a[sortingProp]<b[sortingProp]) {
          return 1; 
        }
        return 0;
      } );
    }
    this.classToRemove = sortingProp; // save previous element id for removing  
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  sendStudentData(a){
    this.serviceVar.studentToEditId = a;
    this.router.navigateByUrl("/edit_student");  
  }  

  removedId(a){
    this.studentToDeleteId = a;
  }
  removing(a){
    for (let i=0; i<this.serviceVar.studentsData.length; i++){
      if (a == this.serviceVar.studentsData[i].id){
        this.serviceVar.studentsData.splice(i,1)
        return;
      }
    }
  }

  searching(property:any, value:string){
    this.searchObj = {[property]:value}; // delete all other properties
    for(let i = 0; i<this.serviceVar.studentsData.length; i++){
      if(this.serviceVar.studentsData[i][property].toLowerCase().search(value.toLowerCase()) != -1 ){ 
        this.serviceVar.studentsData[i].shownStatus = true;
      } else {
        this.serviceVar.studentsData[i].shownStatus = false;
      }
    }
  }

  searching2(property:any, value:number){ // special function for select
    this.searchObj = {[property]:value}; // delete all other properties
    for(let i = 0; i<this.serviceVar.studentsData.length; i++){
      if (this.serviceVar.studentsData[i].course ==  value){
        this.serviceVar.studentsData[i].shownStatus = true;
      } else {
        this.serviceVar.studentsData[i].shownStatus = false;
      }
    }
  }
}
