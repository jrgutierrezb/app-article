import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrEditPostComponent } from 'src/app/shared/components/create-or-edit-post/create-or-edit-post.component';
import { Post } from 'src/app/shared/Entities/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-local-post',
  templateUrl: './local-post.component.html',
  styleUrls: ['./local-post.component.css']
})
export class LocalPostComponent implements OnInit {

  posts: Post[] | undefined;

  ptitle = '';
  pcontent = '';
  pimage = '';

  constructor(
    private postService: PostService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    let a = this.postService.GetAll();
    this.posts = a.articles;
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateOrEditPostComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let a = this.postService.GetAll();
        this.posts = a.articles;
      }
    });
  }

}
