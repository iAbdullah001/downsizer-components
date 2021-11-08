import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutoCompleteService {
  constructor(private httpClient: HttpClient) {}

  getUsers(val: string) {
    return this.httpClient.get('https://reqres.in/api/users').pipe(
      map((res: any) => res.data),
      tap(() => console.log(val))
    );
  }
}
