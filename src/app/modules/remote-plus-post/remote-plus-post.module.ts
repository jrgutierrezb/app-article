import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RemotePostRoutingModule } from "./router/remote-plus-post-routing.module";

import { RemotePlusPostComponent } from "./pages/remote-plus-post/remote-plus-post.component";

@NgModule({
    declarations: [
      RemotePlusPostComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RemotePostRoutingModule
    ]
  })
  export class RemotePostModule { }