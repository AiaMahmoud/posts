import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getPosts(start: number, limit: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
  }
  getPost(postId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
  getPostComments(postId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
  createProduct(model: Post) {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', model);
  }
  getProduct(id: any): Observable<any> {
    return this.http.get('users/api/v1/users', id);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  updateProduct(id: number, model: Post) {
    return this.http.put<any>('https://jsonplaceholder.typicode.com/posts/' + id, model);
  }
}
