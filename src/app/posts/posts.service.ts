import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Post } from './post.model';
import { Comment } from './comment.model';
import { CrudService } from '../shared/crud-generics';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends CrudService<Post> {

  posts: Post[] = [];

  readonly API = environment.API_LOCAL;
  constructor(override http: HttpClient) {
    super(http, `${environment.API_LOCAL}/posts/`);
  }

  // getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(`${this.API}/posts`);
  // }

  getPost(id?: number): Observable<Post> {
    return this.http.get<Post>(`${this.API}/posts/${id}`);
  }

  getComments(postId?: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.API}/comments?postId=${postId}`);
  }
}
