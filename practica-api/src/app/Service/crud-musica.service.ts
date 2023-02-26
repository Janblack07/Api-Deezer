import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudMusicaService {
  api = 'http://127.0.0.1:8000/api/';
  constructor(private http:HttpClient) { }

  createMusic(body:any){
    return this.http.post(this.api+'musicas',body);
  }
  allMusic(){
    return this.http.get(this.api+'musicas');
  }
  destroyMusic(id:any){
    return this.http.delete(`${this.api}musicas/${id}`);
  }
}


