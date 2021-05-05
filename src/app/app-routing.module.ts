import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './content/items/items.component';

const routes: Routes = [
  {path:'',component:ItemsComponent},
  {path:'items',component:ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
