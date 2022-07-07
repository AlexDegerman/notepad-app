import { Component, OnInit } from '@angular/core';

export class Notes {
  title: String | undefined;
  content: String | undefined;
}

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  title = "";
  content = ""
  notes: Notes[] = [];

 
  constructor() { }

  ngOnInit(): void {
  }

  createNewNote(){
    const notes: Notes = {
      title: this.title,
      content: this.content
    };

    this.notes.push(notes);
    this.title = "";
    this.content = "";
  }
}
