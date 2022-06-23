import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "./note";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NoteService{
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
  }

  public getNote(): Observable<Note[]>{
    return this.http.get<Note[]>(`${this.apiServerUrl}/notes/all`);
  }

  public addNote(noteItem: Note): Observable<Note>{
    return this.http.post<Note>(`${this.apiServerUrl}/notes/add`, noteItem);
  }

  public updateNote(noteItem: Note): Observable<Note>{
    return this.http.put<Note>(`${this.apiServerUrl}/notes/update`, noteItem);
  }

  public deleteNote(noteItemId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/notes/delete/${noteItemId}`);
  }

}
