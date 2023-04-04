import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TeacherComponent } from './components/teacher/teacher.component'
import { AppRoutingModule } from './app.routing.module'
import { HttpClientModule } from '@angular/common/http'
import { TeacherService } from './services/teacher.service'
import { HeaderComponent } from './components/header/header.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { HomeComponent } from './home/home.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatListModule } from '@angular/material/list'
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormTeacherComponent } from './components/form-teacher/form-teacher.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FilterAddComponent } from './components/filter-add/filter-add.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { MatDialogRef } from '@angular/material/dialog'
import { TeacherBoxComponent } from './components/teacher-box/teacher-box.component'


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    HeaderComponent,
    HomeComponent,
    FormTeacherComponent,
    FilterAddComponent,
    TeacherBoxComponent,
  ],
  imports: [
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
    AppRoutingModule,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
