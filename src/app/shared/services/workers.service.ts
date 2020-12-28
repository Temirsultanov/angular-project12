import { Injectable } from '@angular/core';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }
  myFunc(p: string){
    console.log(p);
  }
   myWorkingDatabase : MyWorker[] = [
    {id: 1, name: 'Ivan', surname: 'Ivanov', phone: '+79283455364', type: 0},
    {id: 2, name: 'Petr', surname: 'Petr', phone: '+723592837364', type: 1},
    {id: 3, name: 'Sidr', surname: 'Sidorov', phone: '+796292464', type: 2},
    {id: 4, name: 'Vasiliy', surname: 'Vasilev', phone: '+7998572464', type: 3},
  ]

}
