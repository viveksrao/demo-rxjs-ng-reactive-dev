import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShellComponent } from './book-shell.component';

describe('BookShellComponent', () => {
  let component: BookShellComponent;
  let fixture: ComponentFixture<BookShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
