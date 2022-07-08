import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
export class Notes {
  title: String | undefined;
  content: String | undefined;
  date: any ;
}

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css'],
})
export class NotepadComponent implements OnInit {
  title = '';
  content = '';
  date : any;
  notes: Notes[] = [];

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.loadData();
  }

  createNewNote(event: any) {
    let day = new Date();
    let current = this.datePipe.transform(day, 'dd/MM/yyyy')
    this.date = day;
    const notes: Notes = {
      title: this.title,
      content: this.content,
      date: current
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
