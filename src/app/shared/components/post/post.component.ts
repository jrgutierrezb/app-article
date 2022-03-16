import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Article } from '../../Entities/article';
import { Post } from '../../Entities/post';
import { CreateOrEditPostComponent } from '../create-or-edit-post/create-or-edit-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post | undefined;
  @Input() index!: number;
  @Output() edit = new EventEmitter<boolean>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateOrEditPostComponent, {
      width: '300px',
      height: '400px',
      data: { index: this.index, post:this.post },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.edit.emit(result);
    });
  }

  Eliminar() {
    let a = localStorage.getItem('article');
    let b:Article = new Article();
    Object.assign(b , JSON.parse(a ? a : ''));
    debugger
    b.articles?.splice(this.index, 1);
    localStorage.setItem('article',JSON.stringify(b));
    this.edit.emit(true);
  }

}
