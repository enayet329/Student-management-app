import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentFromComponent } from './students/student-from/student-from.component';

export const routes: Routes = [
    {
        path:'students',
        component:StudentsComponent
    },
    {
        path:'student/form',
        component:StudentFromComponent
    },
    {
        path:'students/:id',
        component:StudentFromComponent
    }
];
