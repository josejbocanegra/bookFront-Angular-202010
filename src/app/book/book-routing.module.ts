import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListarComponent } from './book-listar/book-listar.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [{
  path: 'books',
  children: [

    {
      path: 'list',
      component: BookListarComponent
    },
    {
      path: 'new',
      component: BookCreateComponent
    },
    {
      path: ':id',
      component: BookDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
