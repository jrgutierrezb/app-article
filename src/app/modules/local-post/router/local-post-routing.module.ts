import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalPostComponent } from '../pages/local/local-post.component';

//todas las rutas previstas en el home
const routes:Routes = [
  {path: '', children: [
    {path:'local', component:LocalPostComponent},
    {path:'**', redirectTo:'local'}
  ]}
]
@NgModule({
  declarations: [],
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LocalPostRoutingModule { }
