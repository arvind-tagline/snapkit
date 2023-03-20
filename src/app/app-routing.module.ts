import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnapkitComponent } from './components/snapkit/snapkit.component';

const routes: Routes = [
  {
    path:'test',
    component:SnapkitComponent
  },
  {
    path:'**',
    redirectTo:'test'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
