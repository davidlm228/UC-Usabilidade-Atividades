import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ProfessoresComponent,
    LaboratoriosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
