import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { LocalPostRoutingModule } from "./router/local-post-routing.module";

import { LocalPostComponent } from "./pages/local/local-post.component";

@NgModule({
    declarations: [
      LocalPostComponent
    ],
    imports: [
      CommonModule,
      
      SharedModule,
      LocalPostRoutingModule
    ]
  })
  export class LocalPostModule { }