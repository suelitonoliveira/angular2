import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

interface Book {
  name: string;
  author: string;
}
interface Curso {
  name: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  nomePortal: string | undefined;

  cursos: Curso[];
  selectedCursos!: string;


  books!: Book[];
  selectedBook!: string;

  constructor(private cursoService: CursosService) {
    this.cursos = this.cursoService.getCursos();
    this.books = this.cursoService.getBooks();
   }


  ngOnInit(): void {
    this.nomePortal = "https://loiane.training"
  }

}
