import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../types/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  apiUrl="http://localhost:5216/api/students";

  constructor(private http:HttpClient) { }

  getStudents=():Observable<student[]>=> this.http.get<student[]>(this.apiUrl)

  addStudent=(date:student)=>this.http.post(this.apiUrl,date)
  getStudentMethod =(id:number):Observable<student>=> this.http.get<student>(this.apiUrl+'/'+id);
  deleteStudent =(id:number)=> this.http.delete(this.apiUrl+'/'+id);
  editStudent =(id:number,data:student)=> this.http.put(this.apiUrl+'/'+id,data);
}
