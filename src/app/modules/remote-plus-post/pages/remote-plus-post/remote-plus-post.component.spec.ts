import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotePlusPostComponent } from './remote-plus-post.component';

describe('RemotePlusPostComponent', () => {
  let component: RemotePlusPostComponent;
  let fixture: ComponentFixture<RemotePlusPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemotePlusPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotePlusPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
