import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import { CreateOrEditPostComponent } from "./components/create-or-edit-post/create-or-edit-post.component";
import { PostComponent } from "./components/post/post.component";

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        PostComponent,
        CreateOrEditPostComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports:[
        PostComponent,
        CreateOrEditPostComponent
    ],
    providers: [] 
})
export class SharedModule { }