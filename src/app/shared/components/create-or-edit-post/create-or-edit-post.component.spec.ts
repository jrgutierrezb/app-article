
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditPostComponent } from './create-or-edit-post.component';

describe('CreateOrEditPostComponent', () => {
  let component: CreateOrEditPostComponent;
  let fixture: ComponentFixture<CreateOrEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
