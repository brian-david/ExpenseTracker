import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl+"expense_types");
  }

  create(data) {
    return this.http.post(`${baseUrl}expense_type`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}expense_type/${id}`);
  }

  /*
  update(id) {
    return this.http.put(`${baseUrl}expense_type/${id}`, data);
  }
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }



  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
  */
}
