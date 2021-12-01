import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit {


  list: any;

  constructor() { }

  ngOnInit(): void {
    this.list =  _.map([1,2,3], (n) => `# ${n}`)
  }

}
