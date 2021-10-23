import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private db: AngularFireDatabase) {}

  getTables() {
    return this.db
      .list('tables')
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

  addTable(table: Table) {
    return this.db.list('/tables/').push({
      tname: table.tname,
      ticon: table.ticon,
      tcolor: table.tcolor,
      categorie: table.categorie,
    });
  }
}
