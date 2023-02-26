import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeezerComponent } from './deezer/deezer.component';
import { ApiMusicService } from './Service/api-music.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeezerComponent,
    BibliotecaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule

  ],
  providers: [
    ApiMusicService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
