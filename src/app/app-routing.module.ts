import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnapkitComponent } from './components/snapkit/snapkit.component';

const routes: Routes = [
  {
    path:'',
    component:SnapkitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
