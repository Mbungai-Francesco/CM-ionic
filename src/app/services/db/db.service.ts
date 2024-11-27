import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqlite: SQLite) { }

  async openDb() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then( (db) =>{
      db.executeSql('CREATE TABLE IF NOT EXISTS '
        + 'COURSE(id INTEGER PRIMARY KEY AUTOINCREMENT,'
        + ' name VARCHAR(50), description VARCHAR(50), creditValue INTERGER,'
        + ' code VARCHAR(10), outline VARCHAR(255),'
        + ' duration INTERGER', [])
        .catch(e => console.log(e));
      return db;
    })
  }
}
