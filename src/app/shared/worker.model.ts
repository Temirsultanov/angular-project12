export interface MyWorker{
  name: string,
  surname: string,
  type: number,
  id? : number,
}
export enum MyWorkerType  {
  programmer,
  designer,
  copywriter,
  manager,
}
export let myWorkingDatabase : MyWorker[] = [
  {id: 1, name: 'Ivan', surname: 'Ivanov', type: 0},
  {id: 2, name: 'Petr', surname: 'Petr', type: 1},
  {id: 3, name: 'Sidr', surname: 'Sidorov', type: 2},
  {id: 4, name: 'Vasiliy', surname: 'Vasilev', type: 3},
]
