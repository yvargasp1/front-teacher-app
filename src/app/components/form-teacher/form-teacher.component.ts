import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
})
export class FormTeacherComponent   {

  public imagenSeleccionada: File | undefined;
  constructor(
    public dialogRef: MatDialogRef<FormTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Teacher,
    private teacherService: TeacherService,
    private router: Router
  ) {
    console.log(data);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public updateTeacher(teacher: Teacher, validateForm: NgForm): void {
    if (validateForm.valid) {
      if (this.imagenSeleccionada) {
        this.teacherService
          .updateTeacherPhoto(teacher, this.imagenSeleccionada)
          .subscribe({
            next: () => (
              Swal.fire({
                title: 'Ok',
                icon: 'success',
                text: 'Profesor actualizado.',
                confirmButtonText: 'Ok',
              }).then(() => {
                window.location.reload();
              })
            ),
            error: (e) => (
              Swal.fire({
                title: 'Oops..',
                icon: 'error',
                text: 'Validar',
              }),
              console.log(e)
            ),
          });
      } else {
        console.log('updateTeacher', teacher);
        this.teacherService.updateTeachers(teacher).subscribe({
          next: () =>
            Swal.fire({
              title: 'Ok',
              icon: 'success',
              text: 'Profesor actualizado.',
              confirmButtonText: 'Ok',
            }).then(() => {
             window.location.reload();
            }),

          error: (e) => (
            Swal.fire({
              title: 'Oops..',
              icon: 'error',
              text: 'Validar',
            }),
            console.log(e)
          ),
        });
      }
    } else {
      console.log('error', validateForm);
    }
  }

  public createTeacher(teacher: Teacher, validateForm: NgForm): void {
    console.log(teacher);
    if (validateForm.valid) {
      if (this.imagenSeleccionada) {
        this.teacherService
          .addTeacherPhoto(teacher, this.imagenSeleccionada)
          .subscribe({
            next: () => (
              Swal.fire({
                title: 'Ok',
                icon: 'success',
                text: 'Profesor creado.',
                confirmButtonText: 'Ok',
              }).then((r) => {
                window.location.reload();
                console.log(r);
              }),
              this.router.navigate(['/home'])
            ),
            error: (e) => (
              Swal.fire({
                title: 'Oops..',
                icon: 'error',
                text: 'Validar',
              }),
              console.log(e)
            ),
          });
      } else {
        console.log('newTeacher', teacher);
        this.teacherService.addTeachers(teacher).subscribe({
          next: () => (
            Swal.fire({
              title: 'Ok',
              icon: 'success',
              text: 'Profesor creado.',
              confirmButtonText: 'Ok',
            }).then(() => {
              window.location.reload();
            }),
            this.router.navigate(['/home'])
          ),
          error: (e) => (
            Swal.fire({
              title: 'Oops..',
              icon: 'error',
              text: 'Validar',
            }),
            console.log(e)
          ),
        });
      }
    } else {
      console.log('error', validateForm);
    }
  }

  public seleccionarImagen(event: any): void {
    this.imagenSeleccionada = event.target.files[0];
    console.info('Imagen', this.imagenSeleccionada);
    if (this.imagenSeleccionada!.type.indexOf('image') < 0) {
      this.imagenSeleccionada = undefined;
      Swal.fire(
        'Error al seleccionar imagen',
        'El archivo debe ser una imagen',
        'error'
      );
    }
  }
}
