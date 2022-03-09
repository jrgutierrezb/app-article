import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemotePlusPostComponent } from '../pages/remote-plus-post/remote-plus-post.component';

//todas las rutas previstas en el home
const routes:Routes = [
  {path: '', children: [
    {path:'remotePlus', component:RemotePlusPostComponent},
    {path:'**', redirectTo:'remotePlus'}
  ]}
]
@NgModule({
  declarations: [],
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RemotePostRoutingModule { }
