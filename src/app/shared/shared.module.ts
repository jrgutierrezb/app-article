import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostComponent } from "./components/post/post.component";

@NgModule({
    declarations: [
        PostComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        PostComponent
    ],
    providers: [] 
})
export class SharedModule { }