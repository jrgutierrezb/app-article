import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-create-or-edit-post',
    templateUrl: './create-or-edit-post.component.html',
    styleUrls: ['./create-or-edit-post.component.css']
  })
  export class CreateOrEditPostComponent implements OnInit {
  
    isEdit = false;

  
    constructor(
        public dialogRef: MatDialogRef<CreateOrEditPostComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
  
    ngOnInit() {
        this.isEdit = this.data ? true : false;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    CreateOrEdit(data:any) {

    }
  
  }