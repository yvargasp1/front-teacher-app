import { Dialog } from '@angular/cdk/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';
import { enviroment } from 'src/environments/enviroment';
import Swal from 'sweetalert2';
import { FormTeacherComponent } from '../form-teacher/form-teacher.component';

@Component({
  selector: 'app-teacher',
  templateUrl: `./teacher.component.html`,
})
export class TeacherComponent implements OnInit {
  public teachers: Teacher[] | undefined;
  teacherSubscription: Subscription | undefined;
  breakpoint: number | undefined;
  public URL = enviroment.apiBaseUrl;
  constructor(
    private teacherService: TeacherService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 1449 ? 2 : 3;
    this.getTeachers();
  }

  public onResize(event: UIEvent): void {
    const w = event.target as Window;
    this.breakpoint = w.innerWidth <= 1449 ? 2 : 3;
    this.breakpoint = w.innerWidth <= 1037 ? 1 : 3;
  }
  public getTeachers(): void {
    this.teacherSubscription = this.teacherService
      .getTeachers()
      .subscribe((_res) => (this.teachers = _res));
  }

  public deleteTeacher(id: number) {
    Swal.fire({
      title: '¿Está seguro?',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.teacherService.deleteTeachers(id).subscribe({
          next: () =>
            Swal.fire({
              title: 'Eliminado',
              icon: 'success',
            }).then((r) => {
              this.getTeachers();
              console.log(r);
            }),

          error: () =>
            Swal.fire({
              title: 'Eliminado',
              icon: 'error',
            }).then((e) => {
              console.log(e);
            }),
        });
      }
    });
  }

  public openDialog(teacher: Teacher): void {
    console.log(teacher);

    const dialogRef = this.dialog.open(FormTeacherComponent, {
      height: '600px',
      width: '400px',
      data: {
        id: teacher.id,
        teacherCode : teacher.teacherCode,
        name: teacher.name,
        lastName: teacher.lastName,
        email: teacher.email,
        phone: teacher.phone,
        jobTitle: teacher.jobTitle,
        imageUrl: teacher.imageUrl,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTeachers();
      console.log('Closed dialog');
      teacher.name = result;
    });
  }
}
