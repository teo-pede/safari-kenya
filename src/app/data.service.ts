import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private modalName = '';
  constructor() { }

  getModalName(){
    return this.modalName
  }
  setModalName(newModalName: string){
    this.modalName = newModalName
  }
}
