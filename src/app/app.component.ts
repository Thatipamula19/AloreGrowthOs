import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Emoji, EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AddTableComponent } from './add-table/add-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Alore';
  constructor(private dialog: MatDialog) {}
}
