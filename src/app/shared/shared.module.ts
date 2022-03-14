import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatDialogModule} from '@angular/material/dialog';
import { PostComponent } from "./components/post/post.component";


@NgModule({
    declarations: [
        PostComponent
    ],
    imports:[
        CommonModule,
        MatDialogModule
    ],
    exports:[
        PostComponent
    ],
    providers: [] 
})
export class SharedModule { }