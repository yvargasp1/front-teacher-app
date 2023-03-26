import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormTeacherComponent } from '../form-teacher/form-teacher.component';

@Component({
  selector: 'app-filter-add',
  templateUrl: './filter-add.component.html',
})
export class FilterAddComponent {
  constructor(
    public dialog: MatDialog
  ) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(FormTeacherComponent, {
      height: '600px',
      width: '400px',
      data: {
        name: '',
        teacherCode: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        imageUrl: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Closed dialog');
    });
  }
}
