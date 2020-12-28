import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string = '';
  surname: string = '';
  phone: string = '';
  type: number = 0;
  mask = [ '+', 7,'(', /[1-9]/, /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  @Input() change : boolean = false;
  myForm : FormGroup = new FormGroup({
    'workerName': new FormControl(this.name, Validators.required),
    'workerSurname': new FormControl(this.surname, Validators.required),
    'workerType': new FormControl(this.type),
    'workerPhone': new FormControl(this.phone, [Validators.required, Validators.pattern("[+]{1}[7]{1}[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{2}[\-]{1}[0-9]{2}")]),
  });
  constructor() {
    if (this.change) {
      console.log(this.change);
    }
  }
  @Output() addWorker = new EventEmitter<MyWorker>();
  @Output() changeWorker = new EventEmitter<MyWorker>();
  ngOnInit(): void {
  }

  onAddWorker(){
    this.myForm.controls.workerName.value;
    if (this.myForm.status === 'VALID') {
      let worker : MyWorker = {
        name: this.myForm.value.workerName,
        surname: this.myForm.value.workerSurname,
        phone: this.myForm.value.workerPhone,
        type: this.myForm.value.workerType,
      }
      if (this.change) {
        this.changeWorker.emit(worker);
        this.myForm.reset();
      } else{
        this.addWorker.emit(worker);
        this.myForm.reset();
      }
    }

  }

}
