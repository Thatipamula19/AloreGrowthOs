import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTableComponent } from './add-table/add-table.component';

const routes: Routes = [{ path: 'table:id', component: AddTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
