import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Segment } from '../models/addsegment.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SegmentsService {
  constructor(private db: AngularFireDatabase) {}

  getSegments() {
    return this.db
      .list('segments')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.key,
            ...c.payload.exportVal(),
          }))
        )
      );
  }

  addSegment(segment: Segment) {
    return this.db.list('/segments/').push({
      sname: segment.sname,
      sicon: segment.sicon,
      sdescription: segment.sdescription,
    });
  }
}
