import { Injectable } from '@angular/core';
import { Student    } from '../models/student'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {   }
  public studentsData:Array<any> = [  new Student (1,'Artur',' GHazaryan', '37494138884', 'Economics', 'Banks and Loans', 2, '../../assets/img/persons/person1.png'),
                                      new Student (2,'Will','Smith', '37477777777', 'Economics', 'Accounting', 3, '../../assets/img/persons/person2.jpg'),
                                      new Student (3,'Natali','Portman', '37434343434', 'Lower', 'Family Low', 1, '../../assets/img/persons/person3.png'),
                                      new Student (5, 'Eddiy', 'Murphy', '37455665566', 'Linguistics', 'groupname 5', 4, '../../assets/img/persons/person5.jpg'),
                                      new Student (7, 'Scarlett', 'Johansson', '79050180200', 'Applied mathematics', 'groupname 1', 2, '../../assets/img/persons/person7.jpg'),
                                      new Student (12, 'Leonardo', 'Dicaprio', '37422222222', 'Economics', 'Accounting', 3, '../../assets/img/persons/person12.jpg'),
                                      new Student (9, 'Bill', 'Murray', '37455555555', 'Lower', 'Criminal Low', 1, '../../assets/img/persons/person9.jpg' )];
  public facultyList : Array<any> = [{id: 1, name:'Economics', groups:[{ id: 101, name: ' Banks and Loans'}, { id: 102, name: ' Accounting'}, { id: 103, name: ' Menagment'}]},
                                    {id: 3, name:'Lower', groups:[{ id: 301, name: ' Family Low'}, {id: 302, name: ' Criminal Low'}, {id: 303, name: ' Constitution Low'}]},
                                    {id: 2, name: 'Applied mathematics', groups:[{ id: 201, name: ' groupname 1'}, {id: 202, name:' groupname 2'}, {id:203, name:' groupname 3'}]},
                                    {id: 4, name:'Linguistics', groups:[{id: 401, name:' groupname 4'}, {id:402, name:' groupname 5'}, {id:403, name:' groupname 6'}] }];
  public studentToEditId: number;

} 
  