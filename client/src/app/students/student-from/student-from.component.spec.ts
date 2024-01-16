import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFromComponent } from './student-from.component';

describe('StudentFromComponent', () => {
  let component: StudentFromComponent;
  let fixture: ComponentFixture<StudentFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
