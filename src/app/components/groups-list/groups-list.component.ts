import { Component, OnInit  } from '@angular/core';
import { DataService        } from 'src/app/service/data.service';
// import { getElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  public currentFacultyId: number = 0;
  public currentFaculty: Object = this.serviceVar.facultyList[0];
  constructor(private serviceVar:DataService) { 
   
  }

  ngOnInit() {
    document.getElementById('main2').hidden = true;
  }

  chooseFaculty(){
    if (this.currentFacultyId == 0){
      document.getElementById('main1').hidden = false;
      document.getElementById('main2').hidden = true;
      return;
    }
    document.getElementById('main1').hidden = true;
    document.getElementById('main2').hidden = false;
    for (let i = 0; i  < this.serviceVar.facultyList.length; i++){ 
      if (this.serviceVar.facultyList[i].id == this.currentFacultyId){
        this.currentFaculty = this.serviceVar.facultyList[i];
        return ;
      } 
    }
  }

  removing(a, b){
    for(let i = 0; i <this.serviceVar.facultyList.length; i++){
      if(a == this.serviceVar.facultyList[i].id){
        for(let j=0; j< this.serviceVar.facultyList[i].groups.length; j++){
          if(b == this.serviceVar.facultyList[i].groups[j].id){
            this.serviceVar.facultyList[i].groups.splice(j,1);
            return;
          }
        }
      }
    }
  }


}