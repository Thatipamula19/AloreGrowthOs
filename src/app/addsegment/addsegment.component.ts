import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Emoji, EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { SegmentsService } from '../services/segments.service';
import { Segment } from '../models/addsegment.model';

@Component({
  selector: 'app-addsegment',
  templateUrl: './addsegment.component.html',
  styleUrls: ['./addsegment.component.scss'],
})
export class AddsegmentComponent implements OnInit {
  emoji: object = {};
  emojimart;
  nativ: string;

  segmentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddsegmentComponent>,
    private fb: FormBuilder,
    private segmentSevice: SegmentsService
  ) {}

  ngOnInit() {
    this.segmentForm = this.fb.group({
      sname: [null, Validators.required],
      sicon: [null],
      sdescription: [null],
    });
  }

  handleClick($event: EmojiEvent) {
    console.log($event.emoji.native);
    this.emoji = $event.emoji;
    this.emojimart = $event.emoji.native;
  }

  addSegement(segmentForm) {
    console.log(segmentForm);
    let segment: Segment = {
      sname: segmentForm.sname,
      sicon: segmentForm.sicon,
      sdescription: segmentForm.sdescription,
    };
    this.segmentSevice.addSegment(segment);
    this.segmentForm.reset();
    this.dialogRef.close();
  }
  Close() {
    this.dialogRef.close();
  }
}
