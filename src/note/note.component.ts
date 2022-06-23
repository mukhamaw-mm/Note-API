import {Component, OnInit} from "@angular/core";
import {Note} from "../app/service/note";
import {NoteService} from "../app/service/note.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-notes',
  templateUrl: 'note.component.html',
  styleUrls:['note.component.css']


})
export class NoteComponent implements OnInit{
  public notes: Note[];

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.getNote();
  }

  public getNote(): void{
    this.noteService.getNote().subscribe(
      (response: Note[]) => {
        this.notes = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

    public onAddNote(addForm: NgForm): void{
    this.noteService.addNote(addForm.value).subscribe(
      (response: Note) => {
        console.log(response);
        this.getNote();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }



    );


}







}
