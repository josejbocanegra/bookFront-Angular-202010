import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialRoutingModule} from './editorial-routing.module';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { EditorialCreateComponent } from './editorial-create/editorial-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditorialRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditorialListComponent, EditorialCreateComponent],
  exports: [EditorialListComponent, EditorialCreateComponent]
})
export class EditorialModule { }
