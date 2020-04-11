import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../editorial.service';
import { EditorialDetail } from '../editorialDetail';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css']
})
export class EditorialListComponent implements OnInit {
  constructor(private editorialService: EditorialService) { }

  editorials: Array<EditorialDetail>;
  selectedEditorial: EditorialDetail;
  selected = false;

  getEditorials(): void {
    this.editorialService.getEditorials()
      .subscribe(editorials => this.editorials = editorials);
  }

  onSelected(e: EditorialDetail): void {
    console.log(`se seleccionó la editorial  ${e.id}`);
    this.selected = true;
    this.selectedEditorial = e;
  }

  ngOnInit() {
    this.getEditorials();
  }

}
