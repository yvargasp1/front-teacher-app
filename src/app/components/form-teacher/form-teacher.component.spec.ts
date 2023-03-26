import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { FormTeacherComponent } from './form-teacher.component';
import { TeacherService } from 'src/app/services/teacher.service';
import { AppComponent } from 'src/app/app.component';

describe('FormTeacherComponent', () => {
  let fixture: ComponentFixture<FormTeacherComponent>;
  let componentInstance: FormTeacherComponent;
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
      declarations: [ AppComponent, FormTeacherComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FormTeacherComponent);
    componentInstance = fixture.componentInstance;
  });


  it('Form validation', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      const email: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#email');

      const submitButton: HTMLButtonElement =
        fixture.debugElement.nativeElement.querySelector('#submitButton');

      name.dispatchEvent(new Event('focus'));
      name.dispatchEvent(new Event('blur'));

      email.dispatchEvent(new Event('focus'));
      email.dispatchEvent(new Event('blur'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const nameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector('#nameErrors');
        const emailError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector('#emailError');

        expect(nameError.children.length).toEqual(1);
        expect(nameError.children[0].innerHTML).toEqual('Campo requerido.');
        expect(emailError.children.length).toEqual(1);
        expect(emailError.children[0].innerHTML).toEqual('Campo requerido.');

        expect(submitButton.disabled).toBeTruthy();
      });
    });
  });

  it('Form patterns', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      const email: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#email');

      const submitButton: HTMLButtonElement =
        fixture.debugElement.nativeElement.querySelector('#submitButton');
      name.value = '12312324';
      email.value = 'nkn';

      name.dispatchEvent(new Event('input'));
      email.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const nameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector('#nameErrors');
        const emailError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector('#emailError');

        expect(nameError.children.length).toEqual(1);
        expect(nameError.children[0].innerHTML).toEqual(
          'Caracter no permitido.'
        );

        expect(emailError.children.length).toEqual(1);
        expect(emailError.children[0].innerHTML).toEqual(
          'Correo no permitido.'
        );

        expect(submitButton.disabled).toBeTruthy();
      });
    });
  });

  it('check data', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      const email: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#email');

      const submitButton: HTMLButtonElement =
        fixture.debugElement.nativeElement.querySelector('#submitButton');

      name.value = 'Luis';
      email.value = 'a@gmail';

      name.dispatchEvent(new Event('input'));
      email.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const nameError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector('#nameErrors');
        const emailError: HTMLDivElement =
          fixture.debugElement.nativeElement.querySelector('#emailError');

        expect(nameError).toBeNull();
        expect(emailError).toBeNull();

        expect(submitButton.disabled).toBeFalsy();
      });
    });
  });
});
