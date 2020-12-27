import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  name!: string;
  surname!: string;
  type: number = 0;
  myWorkerType = MyWorkerType;
  constructor() {

  }
  @Output() addWorker = new EventEmitter<MyWorker>();
  ngOnInit(): void {
  }

  onAddWorker(){
    if (this.name !== '' && this.surname !== '' && this.name && this.surname) {
      console.log(this.name);
      let worker : MyWorker = {
        name: this.name,
        surname: this.surname,
        type: this.type,
      }
      this.addWorker.emit(worker);
    }
    else{
      alert('Заполните все поля');
    }

  }

}
