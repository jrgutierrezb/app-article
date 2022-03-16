import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Article } from "../../Entities/article";
import { Post } from "../../Entities/post";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-create-or-edit-post',
    templateUrl: './create-or-edit-post.component.html',
    styleUrls: ['./create-or-edit-post.component.css']
  })
  export class CreateOrEditPostComponent implements OnInit {
  
    title = 'New';
    post: Post = new Post();
    formPost!: FormGroup;

    article: Article | undefined;

  
    constructor(
        public dialogRef: MatDialogRef<CreateOrEditPostComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
  
    ngOnInit() {
        this.title = this.data ? 'Edit' : 'New';
        let a = localStorage.getItem('article');
        let b:Article = new Article();
        Object.assign(b , JSON.parse(a ? a : ''));
        this.article = b;
        if(this.data) {
            this.formPost = new FormGroup({
                title: new FormControl(this.data.post.title),
                content: new FormControl(this.data.post.content),
                image: new FormControl(this.data.post.image)
              });
        }
        else {
            this.formPost = new FormGroup({
                title: new FormControl(''),
                content: new FormControl(''),
                image: new FormControl('')
              });
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    CreateOrEdit() {
        if(this.data) {
            this.article?.articles?.forEach((item,i) => {
                if(i === this.data.index) {
                    item.content = this.formPost.get('content')?.value;;
                    item.title = this.formPost.get('title')?.value;
                    item.url = this.formPost.get('image')?.value;
                }
            });
            localStorage.setItem('article',JSON.stringify(this.article));
            this.dialogRef.close(true);
        }
        else {
            let a = new Post();
            a.title = this.formPost.get('title')?.value;
            a.content = this.formPost.get('content')?.value;
            a.image = this.formPost.get('image')?.value;
            this.article?.articles?.push(a);
            localStorage.setItem('article',JSON.stringify(this.article));
            this.dialogRef.close(true);
        }
    }
  
  }