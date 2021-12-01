import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.css']
})
export class DiretivasNgifComponent implements OnInit {

  cursos: string[] = ['Angular2'];

  mostrarCursos!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(): void{
    this.mostrarCursos = !this.mostrarCursos;
  }

}
