import { Component, Output } from '@angular/core';
import { MyWorker, MyWorkerType, myWorkingDatabase } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of workers';
  workers: MyWorker[] = myWorkingDatabase
  myWorkerType = MyWorkerType;
  index: number = 0;
  name: string = '';
  surname: string = '';
  type: number = 0;
  change : boolean = false;
  changeId : number = 0;
  getByTag(type: number){
    return this.workers.filter(worker => worker.type === type);
  }
  onDeleteWorker(id: number){
    this.workers.splice(this.workers.findIndex(worker => worker.id === id), 1);
  }
  onChangeWorker(id: number){
    this.changeId = id;
    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i]['id'] === id) {
        this.name = this.workers[i]['name'];
        this.surname = this.workers[i]['surname'];
        this.type = this.workers[i]['type'];
        this.change = true;
      }
    }
  }
  changeWorker(worker: MyWorker){
    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i]['id'] === this.changeId) {
        this.workers[i]['name'] = worker.name;
        this.workers[i]['surname'] = worker.surname;
        this.workers[i]['type']= worker.type;
      }
    }
    this.change = false;
  }
  onAddWorker(worker: MyWorker){
    let lastId = this.workers.length > 0 ? this.workers[this.workers.length-1]['id'] : 0;
    worker.id = lastId != undefined ? lastId+1 : 0;
    this.workers.push(worker);
  }
}
