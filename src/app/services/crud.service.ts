import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from '../model/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  constructor(private http:HttpClient) { }

  baseUrl:string = 'https://jsonplaceholder.typicode.com/'

  public getPhotos():Observable<any> 
  {
    return this.http.get(this.baseUrl+'photos')
  }
}
