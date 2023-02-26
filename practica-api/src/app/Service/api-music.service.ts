import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {HttpClientModule,HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiMusicService {

/*   private api = "https://api.deezer.com/";
  constructor(private http:HttpClient) { }
  public getDeezer():Observable<any>{
    return this.http.get(this.api);
  }
 */
  baseUrl = 'https://api.deezer.com';

  constructor(private http: HttpClient) {}

  search(query: string) {
    return this.http.get(`${this.baseUrl}/search?q=${query}`);
  }
}
