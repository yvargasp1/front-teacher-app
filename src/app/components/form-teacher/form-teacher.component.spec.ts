import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { FormTeacherComponent } from './form-teacher.component';
import { TeacherService } from 'src/app/services/teacher.service';
import { AppComponent } from 'src/app/app.component';
import { Teacher } from 'src/app/models/teacher.model';

describe('FormTeacherComponent', () => {
  let fixture: ComponentFixture<FormTeacherComponent>;
  let component: FormTeacherComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        HttpClientModule,
        MatButtonModule,
        SweetAlert2Module,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatListModule,
        MatGridListModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
      ],
      providers: [
        {
          provide: MatDialogRef,

          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        TeacherService,
      ],
      declarations: [AppComponent, FormTeacherComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FormTeacherComponent);
    component = fixture.componentInstance;
  });

  it('Form validation', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      const LastName: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#lastName');
      const teacherCode: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#teacherCode');

      const email: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#email');
      const phone: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#phone');
      const jobTitle: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#jobTitle');

      const submitButton: HTMLButtonElement =
        fixture.debugElement.nativeElement.querySelector('#submitButton');

      name.dispatchEvent(new Event('focus'));
      name.dispatchEvent(new Event('blur'));

      LastName.dispatchEvent(new Event('focus'));
      LastName.dispatchEvent(new Event('blur'));

      phone.dispatchEvent(new Event('focus'));
      phone.dispatchEvent(new Event('blur'));

      jobTitle.dispatchEvent(new Event('focus'));
      jobTitle.dispatchEvent(new Event('blur'));

      teacherCode.dispatchEvent(new Event('focus'));
      teacherCode.dispatchEvent(new Event('blur'));

      email.dispatchEvent(new Event('focus'));
      email.dispatchEvent(new Event('blur'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const nameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="nameError"]'
          );

        const LastNameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="lastNameError"]'
          );

        const jobTitleError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="jobTitleError"]'
          );

        const phoneError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="phoneError"]'
          );

        const teacherCodeError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="teacherCodeError"]'
          );
        const emailError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="emailError"]'
          );

        expect(nameError.children.length).toEqual(1);
        expect(emailError.children.length).toEqual(1);
        expect(LastNameError.children.length).toEqual(1);

        expect(teacherCodeError.children.length).toEqual(1);
        expect(phoneError.children.length).toEqual(0);
        expect(jobTitleError.children.length).toEqual(1);

        expect(emailError.children.length).toEqual(1);

        expect(nameError.children[0].textContent).toEqual(' Campo requerido. ');
        expect(emailError.children[0].textContent).toEqual(
          ' Campo requerido. '
        );

        expect(submitButton.disabled).toBeTrue();

        done();
      });
    });
  });

  it('Form patterns', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      const LastName: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#lastName');
      const teacherCode: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#teacherCode');

      const email: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#email');
      const phone: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#phone');
      const jobTitle: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#jobTitle');

      const submitButton: HTMLButtonElement =
        fixture.debugElement.nativeElement.querySelector('#submitButton');

      name.value = '12312324';
      email.value = 'nkn';
      phone.value = 'ssss';
      jobTitle.value = '12333';
      teacherCode.value = 'añala';
      LastName.value = '6466446';

      name.dispatchEvent(new Event('input'));
      LastName.dispatchEvent(new Event('input'));
      email.dispatchEvent(new Event('input'));
      phone.dispatchEvent(new Event('input'));
      jobTitle.dispatchEvent(new Event('input'));
      teacherCode.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const nameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="nameError"]'
          );

        const LastNameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="lastNameError"]'
          );

        const jobTitleError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="jobTitleError"]'
          );

        const phoneError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="phoneError"]'
          );

        const teacherCodeError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="teacherCodeError"]'
          );
        const emailError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="emailError"]'
          );

        expect(nameError.children.length).toEqual(1);
        expect(nameError.children[0].innerHTML).toEqual(
          ' Caracter no permitido. '
        );

        expect(LastNameError.children.length).toEqual(1);
        expect(LastNameError.children[0].innerHTML).toEqual(
          ' Caracter no permitido. '
        );

        expect(emailError.children.length).toEqual(1);
        expect(emailError.children[0].innerHTML).toEqual(
          ' Correo no permitido. '
        );

        expect(phoneError.children.length).toEqual(2);
        expect(phoneError.children[0].innerHTML).toEqual(
          ' Caracter no permitido. '
        );
        expect(phoneError.children[1].innerHTML).toEqual(
          ' Minimo de caracteres 8. '
        );

        expect(teacherCodeError.children.length).toEqual(2);
        expect(teacherCodeError.children[0].innerHTML).toEqual(
          ' Caracter no permitido. '
        );

        expect(teacherCodeError.children[1].innerHTML).toEqual(
          ' Minimo de caracteres 8. '
        );

        expect(jobTitleError.children.length).toEqual(1);
        expect(jobTitleError.children[0].innerHTML).toEqual(
          ' Caracter no permitido. '
        );

        //expect(emailError.children.length).toEqual(1);
        /*  expect(emailError.children[0].innerHTML).toEqual(
          'Correo no permitido.'
        ); */

        expect(submitButton.disabled).toBeTruthy();
        done();
      });
    });
  });

  it('check data', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      const LastName: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#lastName');
      const teacherCode: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#teacherCode');

      const email: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#email');
      const phone: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#phone');
      const jobTitle: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#jobTitle');

      const submitButton: HTMLButtonElement =
        fixture.debugElement.nativeElement.querySelector('#submitButton');

      name.value = 'Luis';
      email.value = 'a@gmail';
      phone.value = '12345968';
      jobTitle.value = 'Ingeniero';
      teacherCode.value = '12345678';
      LastName.value = 'Vargas';

      name.dispatchEvent(new Event('input'));
      LastName.dispatchEvent(new Event('input'));
      email.dispatchEvent(new Event('input'));
      phone.dispatchEvent(new Event('input'));
      jobTitle.dispatchEvent(new Event('input'));
      teacherCode.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const nameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="nameError"]'
          );

        const LastNameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="lastNameError"]'
          );

        const jobTitleError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="jobTitleError"]'
          );

        const phoneError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="phoneError"]'
          );

        const teacherCodeError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="teacherCodeError"]'
          );
        const emailError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector(
            'div[id="emailError"]'
          );

        expect(nameError.children.length).toEqual(0);
        expect(emailError.children.length).toEqual(0);
        expect(LastNameError.children.length).toEqual(0);

        expect(phoneError.children.length).toEqual(0);

        expect(teacherCodeError.children.length).toEqual(0);
        expect(jobTitleError.children.length).toEqual(0);

        expect(submitButton.disabled).toBeFalsy();

        done();
      });
    });
  });

  
});
