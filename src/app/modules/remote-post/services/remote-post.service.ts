import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Article } from 'src/app/shared/Entities/article';

@Injectable({
  providedIn: 'root'
})
export class RemotePostService {

  baseUrl = environment.remoteUrl;

  constructor(
    private httpClient: HttpClient
    ) { }

  GetAll(): Observable<Article> {
    let url = this.baseUrl + "search?q=watches&token=70423ef57bb3d913dc2ef82093751869";
    return this.httpClient.get<Article>(url);
  }
}
