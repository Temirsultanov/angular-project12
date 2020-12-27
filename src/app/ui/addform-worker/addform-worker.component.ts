import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  @Input() name: string = 'Ivan';
  @Input() surname: string = 'Ivanov';
  @Input() type: number = 2;
  @Input() change : boolean = false;
  constructor() {

  }
  @Output() addWorker = new EventEmitter<MyWorker>();
  @Output() changeWorker = new EventEmitter<MyWorker>();
  ngOnInit(): void {
  }

  onAddWorker(){
    console.log(this.change);
    if (this.name !== '' && this.surname !== '' && this.name && this.surname) {
      let worker : MyWorker = {
        name: this.name,
        surname: this.surname,
        type: this.type,
      }
      if (this.change) {
        this.changeWorker.emit(worker);
      }
      else{
        this.addWorker.emit(worker);
      }

    }
    else{
      alert('Заполните все поля');
    }

  }

}
