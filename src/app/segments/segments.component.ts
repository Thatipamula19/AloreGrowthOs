import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsegmentComponent } from '../addsegment/addsegment.component';
import { SegmentsService } from '../services/segments.service';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css'],
})
export class SegmentsComponent implements OnInit {
  segments: any[];
  constructor(
    private dialog: MatDialog,
    private segmentService: SegmentsService
  ) {}

  ngOnInit() {
    this.segmentService.getSegments().subscribe((segments) => {
      this.segments = segments;
      console.log(segments);
    });
  }

  addSegment() {
    this.dialog.open(AddsegmentComponent, { width: '550px', height: '540px' });
  }
}
