import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './componentes/meu-primeiro2/meu-primeiro2.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CursosService } from './services/cursos.service';
import { DiretivasNgifComponent } from './componentes/diretivas-ngif/diretivas-ngif.component';
import { DiretivasNgforComponent } from './componentes/diretivas-ngfor/diretivas-ngfor.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { NgswitchComponent } from './componentes/ngswitch/ngswitch.component';

//primeng imports
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiro2Component,
    CursosComponent,
    DiretivasNgifComponent,
    DiretivasNgforComponent,
    MenubarComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabMenuModule
  ],
  providers: [ CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
