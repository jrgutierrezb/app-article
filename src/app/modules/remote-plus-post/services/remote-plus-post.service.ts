import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Post } from 'src/app/shared/Entities/post';

@Injectable({
  providedIn: 'root'
})
export class RemotePlusPostService {

  baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
    ) { }

  GetAll(): Observable<Post[]> {
    let url = this.baseUrl + "Post";
    return this.httpClient.get<Post[]>(url);
  }
}
