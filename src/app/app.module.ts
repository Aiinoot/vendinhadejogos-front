import { PedidoModule } from './pedido/pedido.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { SobreModule } from './sobre/sobre.module';
import { ClienteModule } from './cliente/cliente.module';
import { JogoModule } from './jogo/jogo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SobreModule,
    MenuModule,
    ClienteModule,
    JogoModule,
    PedidoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
