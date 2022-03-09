import { RemotePlusPostComponent } from './modules/remote-plus-post/pages/remote-plus-post/remote-plus-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", loadChildren:()=>import ('./modules/local-post/local-post.module').then(m=>m.LocalPostModule)},
  {path:"remote", loadChildren:()=>import ('./modules/remote-post/remote-post.module').then(m=>m.RemotePostModule)},
  {path:"remotePlus", loadChildren:()=>import ('./modules/remote-plus-post/remote-plus-post.module').then(m=>m.RemotePostModule)},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
