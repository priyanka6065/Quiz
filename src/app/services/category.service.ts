import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private headers: HttpHeaders;
  private URL: string = "http://localhost:14789/api/categories";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  getCategories() {
    return this.http.get<Category[]>(this.URL);
  }

  createCategory(category: Category) {
    var result = JSON.stringify(category);
    return this.http.post(this.URL, result, { headers: this.headers });
  }

  updateCategory(id: number, category: Category){
    var result = JSON.stringify(category);
    return this.http.put(this.URL + '/' + id, result, {headers: this.headers});
  }

  deleteCategory(id: number){
    return this.http.delete(this.URL + '/'+ id);
  }

  getCategoryById(id : number){
    return this.http.get<Category>(this.URL + '/' + id); 
 }
}
