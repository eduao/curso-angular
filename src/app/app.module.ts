import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ListarContas} from './conta/listar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ListarContas ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
