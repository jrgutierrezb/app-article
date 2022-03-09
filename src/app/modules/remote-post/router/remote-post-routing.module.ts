import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemotePostComponent } from '../pages/remote-post/remote-post.component';

//todas las rutas previstas en el home
const routes:Routes = [
  {path: '', children: [
    {path:'remote', component:RemotePostComponent},
    {path:'**', redirectTo:'remote'}
  ]}
]
@NgModule({
  declarations: [],
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RemotePostRoutingModule { }
