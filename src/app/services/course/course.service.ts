import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DbService } from '../db/db.service';
import Course from 'src/app/types/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  dbInstance !: SQLiteObject;

  constructor( private dbService : DbService) {
    dbService.openDb().then( (db) =>{
      this.dbInstance = db;
    })
  }

  getAllCourses() {
    let CourseList : Course[] = []
    this.dbInstance.executeSql('select * from COURSE', []).then(
      (res) =>{
        for(var x=0; x<res.rows.length; x++)
          CourseList.push(res.rows.item(x));
        }
    ).catch(e => console.log(e));
    return CourseList;
  }

  async addCourse(course: Course) {
    this.dbInstance.executeSql('INSERT INTO COURSE (name, description, creditValue, code, outline, duration) VALUES (?,?,?,?,?,?)', [course.name, course.description, course.creditValue, course.code, course.outline, course.duration])
    .catch(e => console.log(e));
    return this.getAllCourses();
  }

  async updateCourse(course: Course) {
    this.dbInstance.executeSql(
      'UPDATE COURSE SET name = ?, description = ?, creditValue = ?, code = ?, outline = ?, duration = ? WHERE id = ?', 
      [course.name, course.description, course.creditValue, course.code, course.outline, course.duration, course.id]
    )
    .catch(e => console.log(e));
    return this.getAllCourses();
  }

  async deleteCourse(id: number) {
    this.dbInstance.executeSql('DELETE FROM COURSE WHERE id=?', [id])
    .catch(e => console.log(e));
    return this.getAllCourses();
  }
}