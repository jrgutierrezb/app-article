import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RemotePostRoutingModule } from "./router/remote-post-routing.module";

import { RemotePostComponent } from "./pages/remote-post/remote-post.component";

@NgModule({
    declarations: [
      RemotePostComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RemotePostRoutingModule
    ]
  })
  export class RemotePostModule { }