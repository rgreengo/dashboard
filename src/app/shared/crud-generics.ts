import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Subject } from "rxjs/internal/Subject";
import { tap, take, delay } from "rxjs/operators";

export class CrudService<T>{

  constructor(protected http: HttpClient, private API_URL: string) {
  }

  list() {
    const formData: FormData = new FormData();
    const req = new HttpRequest('GET', this.API_URL, formData, { reportProgress: true });
    const progress = new Subject<number>();

    return this.http.get<T[]>(this.API_URL, {
      reportProgress: true,
    }).pipe(take(20));
  }

  loadById(id: string) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(
      take(1),
    );
  }

  create(record: T) {
    return this.http.post<T>(this.API_URL, record, { reportProgress: true }).pipe(take(1));
  }

  update(record: T, id: string) {
    return this.http.put<T>(`${this.API_URL}/${id}`, record, { reportProgress: true }).pipe(take(1));
  }

  delete(id: string) {
    return this.http.delete<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
