export interface MyWorker{
  name: string,
  surname: string,
  phone: string,
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
  {id: 1, name: 'Ivan', surname: 'Ivanov', phone: '+79283455364', type: 0},
  {id: 2, name: 'Petr', surname: 'Petr', phone: '+723592837364', type: 1},
  {id: 3, name: 'Sidr', surname: 'Sidorov', phone: '+796292464', type: 2},
  {id: 4, name: 'Vasiliy', surname: 'Vasilev', phone: '+7998572464', type: 3},
]
