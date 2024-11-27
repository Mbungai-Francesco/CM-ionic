import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CourseComponent } from '../components/course/course.component';
import Course from '../types/course';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CourseComponent, RouterLink],
})
export class HomePage {
  
  courses: Course[] = [
    {
      id: 1,
      creditValue: 3,
      description: "Introduction to Programming",
      code: "CS101",
      outline: "Basics of programming, data types, control structures",
      duration: 10
    },
    {
      id: 2,
      creditValue: 4,
      description: "Data Structures and Algorithms",
      code: "CS201",
      outline: "Arrays, linked lists, trees, graphs, sorting algorithms",
      duration: 15
    },
    {
      id: 3,
      creditValue: 3,
      description: "Database Systems",
      code: "CS301",
      outline: "Relational databases, SQL, normalization, transactions",
      duration: 12
    },
    {
      id: 4,
      creditValue: 2,
      description: "Operating Systems",
      code: "CS401",
      outline: "Processes, threads, memory management, file systems",
      duration: 14
    },
    {
      id: 5,
      creditValue: 3,
      description: "Computer Networks",
      code: "CS501",
      outline: "Network models, protocols, IP addressing, routing",
      duration: 11
    }
  ];

  constructor() {}
}
