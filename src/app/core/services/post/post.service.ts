import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsInteface } from '../../models/posts.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}


  url = `${environment.url_api}posts/?_embed`;

  getPosts(): Observable<PostsInteface[]> {
    return this.http.get<PostsInteface[]>(this.url, {
      params: {
        per_page: '12'
      }
    });
  }

  getPost(slug: string): Observable<PostsInteface> {
    return this.http.get<PostsInteface>(`${this.url}posts/?_embed/${slug}`);
  }
}
