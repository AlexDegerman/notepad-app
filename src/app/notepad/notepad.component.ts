import { Component, OnInit } from '@angular/core';

export class Notes {
  title: String | undefined;
  content: String | undefined;
}

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css'],
})
export class NotepadComponent implements OnInit {
  title = '';
  content = '';
  notes: Notes[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  createNewNote(event: any) {
    const notes: Notes = {
      title: this.title,
      content: this.content,
    };
    console.log(event);
    localStorage.setItem(event, JSON.stringify(notes));
    this.notes.push(notes);
    this.title = '';
    this.content = '';
  }

  loadData() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      let datus = localStorage[keys[i]];
      this.notes.push(JSON.parse(datus));
    }
  }
}
