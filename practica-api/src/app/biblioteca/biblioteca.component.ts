import { Component,OnInit } from '@angular/core';
import { CrudMusicaService } from '../Service/crud-musica.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
results:any;
constructor(private music:CrudMusicaService){
}
ngOnInit(){
  this.OnAll();
}
OnAll(){

this.music.allMusic().subscribe((data:any)=>{
  this.results = data.Musica;
  console.log(data);
},(e)=>{console.log(e);});
}
OnDestroy(id:any){
this.music.destroyMusic(id).subscribe((data:any)=>{
  alert('Se Elimino Correctamente.');
  this.OnAll();
},(e)=>{console.log(e);});
}
}
