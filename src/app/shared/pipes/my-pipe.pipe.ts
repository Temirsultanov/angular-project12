import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(workers: any[], filterStr: string): any[] {
    if (filterStr === '') {
      return workers;
    }
    else{
      let filteredItems = workers.filter((worker) =>
        worker.name.toLowerCase().indexOf(filterStr.toLowerCase()) !== -1 ||
        worker.surname.toLowerCase().indexOf(filterStr.toLowerCase()) !== -1 ||
        worker.phone.toLowerCase().indexOf(filterStr.toLowerCase()) !== -1
      );
      return filteredItems;
    }

  }

}
