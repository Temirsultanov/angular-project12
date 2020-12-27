import { Component } from '@angular/core';
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
  currentItem : MyWorker[] = [];
  index: number = 0;
  getByTag(type: number){
    return this.workers.filter(worker => worker.type === type);
  }
  onDeleteWorker(id: number){
    this.workers.splice(this.workers.findIndex(worker => worker.id === id), 1);
  }
  onChangeWorker(id: number){
    let index : number = 0;
    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i]['id'] === id) {
        index = i;
      }
    }
    let namePrompt = this.workers[this.index]['name'];
    let surnamePrompt = this.workers[this.index]['surname'];
    let typePrompt = this.workers[this.index]['type'];
    let namePrompt1 = prompt('Enter name', this.workers[index]['name']);
    let surnamePrompt1 = prompt('Enter surname', this.workers[index]['surname']);
    let typePrompt1 = prompt('Enter type', this.workers[index]['type'].toString());
    if (namePrompt1 !== '' && surnamePrompt1 !== '' && typePrompt1 !== '' && Number(typePrompt1) > -1 && Number(typePrompt1) < 4) {
      if (namePrompt1 !== null) {
        namePrompt = namePrompt1;
      }
      if (surnamePrompt1 !== null) {
        surnamePrompt = surnamePrompt1;
      }
      if (typePrompt1 !== null) {
        typePrompt = Number(typePrompt1);
      }
      this.workers[index]['name'] = namePrompt;
      this.workers[index]['surname'] = surnamePrompt;
      this.workers[index]['type'] = typePrompt;
    }
    else{
      alert('Введите все строки в следующий раз и вводите нормальный type');
    }

  }
  onAddWorker(worker: MyWorker){
    let lastId = this.workers.length > 0 ? this.workers[this.workers.length-1]['id'] : 0;
    worker.id = lastId != undefined ? lastId+1 : 0;
    this.workers.push(worker);
  }
}
