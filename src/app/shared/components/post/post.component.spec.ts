import { Post } from './../../../modules/local-post/Entities/post';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  @Input

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
