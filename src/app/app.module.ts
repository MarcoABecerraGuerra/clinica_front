import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { HorarioComponent } from './pages/horario/horario.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
