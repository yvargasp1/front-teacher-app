import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.model';
import { enviroment } from 'src/environments/enviroment';

@Component({
  selector: 'app-teacher-box',
  templateUrl: './teacher-box.component.html',
})
export class TeacherBoxComponent {
  public URL = enviroment.apiBaseUrl;
  @Input()
  teacher: Teacher | undefined;

  @Output()
  updateTeacher = new EventEmitter();

  @Output()
  deleteTeacher = new EventEmitter();

  openDialog(): void {
    this.updateTeacher.emit(this.teacher);
  }

  deleteTeacherEvent():void{
    this.deleteTeacher.emit(this.teacher?.id)
  }
}
