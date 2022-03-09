
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/Entities/article';
import { Post } from 'src/app/shared/Entities/post';
import { RemotePostService } from '../../services/remote-post.service';

@Component({
  selector: 'app-remote-post',
  templateUrl: './remote-post.component.html',
  styleUrls: ['./remote-post.component.css']
})
export class RemotePostComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(
    private remotePostService: RemotePostService
  ) { }

  ngOnInit(): void {
    this.remotePostService.GetAll().subscribe(
      (respuesta: Article) => {
        this.posts = respuesta.articles
      },(error:any) => {
        console.log(error)
      }
    );
  }

}
