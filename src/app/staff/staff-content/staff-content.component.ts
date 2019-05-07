import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../../_models/post.model';
import { BlogService } from '../../_services/blog.service';

@Component({
  selector: 'app-staff-content',
  templateUrl: './staff-content.component.html',
  styleUrls: ['./staff-content.component.scss'],
  providers: [BlogService]
})
export class StaffContentComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSubscription: Subscription;

  constructor(public bloggingService: BlogService) { }

  ngOnInit() {
    this.bloggingService.getPosts();
    this.postsSubscription = this.bloggingService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
