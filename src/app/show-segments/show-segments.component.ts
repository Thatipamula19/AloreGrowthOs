import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, mergeMap } from 'rxjs/operators';
import { AddTableComponent } from '../add-table/add-table.component';
import { SegmentsService } from '../services/segments.service';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-show-segments',
  templateUrl: './show-segments.component.html',
  styleUrls: ['./show-segments.component.css'],
})
export class ShowSegmentsComponent implements OnInit {
  segments: any[];
  tables: any[];
  color: string;
  table;
  constructor(
    private segmentService: SegmentsService,
    private tableService: TableService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.segmentService
      .getSegments()
      .pipe(
        mergeMap((segments) =>
          this.tableService
            .getTables()
            .pipe(map((tables) => [segments, tables]))
        )
      )
      .subscribe(([segments, tables]) => {
        this.segments = segments;
        this.tables = tables;
      });
  }

  addTable(sname) {
    this.dialog.open(AddTableComponent, {
      width: '550px',
      height: '540px',
      data: sname,
    });
  }

  getTableBySegment(sname) {
    console.log(sname);

    return this.tables.filter((table) => table.categorie == sname);
  }
}
