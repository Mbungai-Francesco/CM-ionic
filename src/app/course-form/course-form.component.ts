import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  imports: [ IonicModule],
  standalone : true
})
export class CourseFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log();
    
  }

}
