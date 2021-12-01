import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem!: MenuItem;

  nome: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  this.activeItem = this.items[0];
  console.log("item ativo", this.activeItem)
  console.log(this.items)
  }
  onClick(){
   this.items.forEach((valor) => {

    switch (valor.label) {
      case 'Home':
        this.nome === 'Home';
        break;
      case 'Calendar':
        this.nome === 'Calendar';
        break;
      default:
        break;
    }
      // this.nome = valor.label == 'Home';
      console.log('forEach',this.activeItem.label);
    })
  }


}
