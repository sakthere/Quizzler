import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzScreenComponent } from './quizz-screen.component';

describe('QuizzScreenComponent', () => {
  let component: QuizzScreenComponent;
  let fixture: ComponentFixture<QuizzScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
