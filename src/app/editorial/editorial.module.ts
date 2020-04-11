import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialRoutingModule} from './editorial-routing.module';
import { EditorialListComponent } from './editorial-list/editorial-list.component';

@NgModule({
  imports: [
    CommonModule,
    EditorialRoutingModule
  ],
  declarations: [EditorialListComponent],
  exports: [EditorialListComponent]
})
export class EditorialModule { }
