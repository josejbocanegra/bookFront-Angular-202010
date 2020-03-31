/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookListarComponent } from './book-listar.component';

describe('BookListarComponent', () => {
  let component: BookListarComponent;
  let fixture: ComponentFixture<BookListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
