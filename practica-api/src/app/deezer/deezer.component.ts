import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiMusicService } from '../Service/api-music.service';
import { CrudMusicaService } from '../Service/crud-musica.service';

@Component({
  selector: 'app-deezer',
  templateUrl: './deezer.component.html',
  styleUrls: ['./deezer.component.css']
})

export class DeezerComponent {
  results: any;
  query:any;
  file!:any;
  constructor(private deezerService: ApiMusicService,private music:CrudMusicaService) {}
  musicForm= new FormGroup({
    title: new FormControl(''),
    cover_small: new FormControl(''),
    duration: new FormControl(''),
    preview : new FormControl(''),

  })
  search(query: string) {
    this.deezerService.search(query)
      .subscribe((data: any) => {
        this.results = data.data;
      });
  }
OnCreate(musica:any){
    console.log(musica);
    const body:any = {
      'title':musica.title,
      'cover_small':musica.album.cover_small,
      'duration':musica.duration,
      'preview':musica.preview
    };
     this.music.createMusic(body).subscribe((data:any)=>{
      console.log(data);
      alert('Se creo la musica.');
    },(e)=>{console.log(e);});
  }
}
