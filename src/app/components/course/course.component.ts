import { Component, Input, OnInit } from '@angular/core';
import Course from 'src/app/types/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  imports: [],
  standalone: true
})
export class CourseComponent  implements OnInit {

  @Input() course !: Course;

  constructor() { }

  ngOnInit() {
    console.log('CourseComponent initialized');
  }

}
