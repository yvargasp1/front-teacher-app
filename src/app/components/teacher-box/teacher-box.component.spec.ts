import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBoxComponent } from './teacher-box.component';

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

import { TeacherService } from 'src/app/services/teacher.service';
import { AppComponent } from 'src/app/app.component';
describe('TeacherComponent', () => {
  let component: TeacherBoxComponent;
  let fixture: ComponentFixture<TeacherBoxComponent>;

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
      declarations: [AppComponent, TeacherBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
