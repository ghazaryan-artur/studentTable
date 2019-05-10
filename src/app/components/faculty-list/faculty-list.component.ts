import { Component, OnInit  } from '@angular/core';
import { DataService        } from 'src/app/service/data.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  constructor(private serviceVar:DataService) { }

  ngOnInit(){ }

  removing(a){
    for(let i=0; i < this.serviceVar.facultyList.length;i++){
      if(this.serviceVar.facultyList[i].id == a){
        this.serviceVar.facultyList.splice(i, 1);
        return;
      }
    }
  }
}
