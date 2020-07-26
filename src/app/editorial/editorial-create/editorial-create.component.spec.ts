import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialCreateComponent } from './editorial-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('EditorialCreateComponent', () => {
  let component: EditorialCreateComponent;
  let fixture: ComponentFixture<EditorialCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule, ReactiveFormsModule, FormsModule, ToastrModule.forRoot()],
      declarations: [ EditorialCreateComponent ],
      providers: [
        {provide: ToastrService, useClass: ToastrService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
