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
