import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from '../model/entries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryServiceService {

  constructor(private http: HttpClient) { }

  getAllGoalEntries(id: number): Observable<Array<Entry>>{
    return this.http.get<Array<Entry>>(`http://localhost:8080/api/entries/entry?goalId=${id}`);
  }

  createEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>('http://localhost:8080/api/entries/entry', entry);
  }
}
