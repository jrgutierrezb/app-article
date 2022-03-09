
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/Entities/article';
import { Post } from 'src/app/shared/Entities/post';
import { RemotePlusPostService } from '../../services/remote-plus-post.service';

@Component({
  selector: 'app-remote-plus-post',
  templateUrl: './remote-plus-post.component.html',
  styleUrls: ['./remote-plus-post.component.css']
})
export class RemotePlusPostComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(
    private remotePlusPostService: RemotePlusPostService
  ) { }

  ngOnInit(): void {
    this.remotePlusPostService.GetAll().subscribe(
      (respuesta: Post[]) => {
        this.posts = respuesta
      },(error:any) => {
        console.log(error)
      }
    );
  }

}
