import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { enviroment } from 'src/environments/enviroment'
import { Teacher } from '../models/teacher.model'

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private URL = enviroment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.URL}/teacher/all`);
  }

  public addTeachers(teacher: Teacher): Observable<Teacher[]> {
    return this.http.post<Teacher[]>(`${this.URL}/teacher/add`, teacher);
  }

  public updateTeachers(teacher: Teacher): Observable<Teacher[]> {
    return this.http.put<Teacher[]>(`${this.URL}/teacher/update`, teacher);
  }

  public deleteTeachers(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/teacher/delete/${id}`);
  }

  public addTeacherPhoto(
    Teacher: Teacher,
    archivo: File
  ): Observable<Teacher[]> {
    const formData = new FormData();

    console.log('Archivo', archivo);
    formData.append('archivo', archivo);
    formData.append('name', Teacher.name);
    formData.append('teacherCode', Teacher.teacherCode);
    formData.append('lastName', Teacher.lastName);
    formData.append('phone', Teacher.phone.toString());
    formData.append('email', Teacher.email.toString());
    formData.append('jobTitle', Teacher.jobTitle.toString());

    return this.http.post<Teacher[]>(
      `${this.URL}/teacher/create-photo`,
      formData
    );
  }
  public updateTeacherPhoto(
    Teacher: Teacher,
    archivo: File
  ): Observable<Teacher[]> {
    const formData = new FormData();

    console.log('id', Teacher.id.toString());
    formData.append('archivo', archivo);

    return this.http.put<Teacher[]>(
      `${this.URL}/teacher/update-photo/${Teacher.id}`,
      formData
    );
  }
}
