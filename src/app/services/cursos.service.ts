import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [{name:'Java'},{name: 'Ex js'} , {name: 'angular'}];
  }

  getBooks(){
    return [
      {name: 'Book1', author: 'Author1'},
      {name: 'Book2', author: 'Author2'},
      {name: 'Book3', author: 'Author3'},
      {name: 'Book4', author: 'Author4'},
      {name: 'Booaaaa5', author: 'Author5'}
  ];
  }

}
