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
    formPost: FormGroup | undefined;
    ptitle = '';
    pcontent = '';
    pimage = '';

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
                    item.content = this.post?.content;
                    item.title = this.post?.title;
                    item.url = this.post?.url;
                }
            });
            localStorage.removeItem('article');
            localStorage.setItem('article',JSON.stringify(this.article));
            this.dialogRef.close(true);
        }
        else {
            let a = new Post();
            this.pimage;
            this.ptitle;
            a.title = this.post?.title;
            a.content = this.post?.content;
            a.image = this.post?.image;
            this.article?.articles?.push();
            localStorage.setItem('article',JSON.stringify(this.article));
            this.dialogRef.close(true);
        }
    }
  
  }