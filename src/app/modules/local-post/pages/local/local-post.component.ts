import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/Entities/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-local-post',
  templateUrl: './local-post.component.html',
  styleUrls: ['./local-post.component.css']
})
export class LocalPostComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    let a = this.postService.GetAll();
    this.posts = a.articles;
  }

}
