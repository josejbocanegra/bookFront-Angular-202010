import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../editorial.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorial-create',
  templateUrl: './editorial-create.component.html',
  styleUrls: ['./editorial-create.component.css']
})
export class EditorialCreateComponent implements OnInit {

  constructor(
    private editorialService: EditorialService,
    private toastrService: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder) {
        this.editorialForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(2)]],

      });
    }


    /*
     * form for editorial
      */
     editorialForm: FormGroup;

     createEditorial(editorial) {
      this.editorialService.createEditorial(editorial)
      .subscribe((editorials) => {
          this.toastrService.success('The editorial was created', 'Editorial creation');
          this.router.navigate(['/editorial/list']);
          this.editorialForm.reset();
      }, err => {
          this.toastrService.error(err, 'Error creating the editorial');
      });
     }

  ngOnInit(): void {
  }

}
