import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { DeezerComponent } from './deezer/deezer.component';

const routes: Routes = [
  {path:'',component:DeezerComponent},
  {path:'biblioteca',component:BibliotecaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
