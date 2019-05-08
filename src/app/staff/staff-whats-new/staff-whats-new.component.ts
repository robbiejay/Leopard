import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../../_models/post.model';
import { BlogService } from '../../_services/blog.service';
@Component({
  selector: 'app-staff-whats-new',
  templateUrl: './staff-whats-new.component.html',
  styleUrls: ['./staff-whats-new.component.scss'],
  providers: [BlogService]
})
export class StaffWhatsNewComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  private postsSubscription: Subscription;
  constructor(private bloggingService: BlogService) { }

  ngOnInit() {
    this.isLoading = true;
    this.bloggingService.getPosts();
    this.postsSubscription = this.bloggingService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
