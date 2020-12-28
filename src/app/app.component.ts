import { Component, Output } from '@angular/core';
import { HttpWorkersService } from './shared/services/http-workers.service';
import { WorkersService } from './shared/services/workers.service';
import { MyWorker, MyWorkerType} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of workers';
  constructor(private workersService : WorkersService, private httpWorkersService : HttpWorkersService){}
  workers: MyWorker[] = [];
  ngOnInit(){
    this.workersService.myFunc('Hey');
    this.getData();
  }

  async getData(){
    try {
      this.workers = await this.httpWorkersService.getWorkers();
    } catch (error) {
        console.error(error);
    }
  }

  myWorkerType = MyWorkerType;
  index: number = 0;
  name: string = '';
  surname: string = '';
  phone: string = '';
  type: number = 0;
  change : boolean = false;
  changeId : number = 0;
  getByTag(type: number){
    return this.workers.filter(worker => worker.type === type);
  }
  onChangeWorker(id: number){
    this.changeId = id;
    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i]['id'] === id) {
        this.name = this.workers[i]['name'];
        this.surname = this.workers[i]['surname'];
        this.phone = this.workers[i]['phone'];
        this.type = this.workers[i]['type'];
        this.change = true;
      }
    }
  }
  async changeWorker(worker: MyWorker){
    try {
      await this.httpWorkersService.updateWorkers(worker, this.changeId);
      this.change = false;
    } catch (error) {
      console.log(error);
    } finally {
      this.getData();
    }
  }
  async onAddWorker(worker: MyWorker){
    try {
      let lastId = this.workers.length > 0 ? this.workers[this.workers.length-1]['id'] : 0;
      worker.id = lastId != undefined ? lastId+1 : 0;
      await this.httpWorkersService.postWorkers(worker);

    } catch (error) {
      console.error(error);
    } finally {
      this.getData();
    }
  }
  async onDeleteWorker(id: number){
    try {
      await this.httpWorkersService.deleteWorker(id);
    } catch (error) {
      console.log(error);
    } finally {
      this.getData();
    }

  }
}
