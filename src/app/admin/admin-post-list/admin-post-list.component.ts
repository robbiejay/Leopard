import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../../_models/post.model';
import { BlogService } from '../../_services/blog.service';


@Component({
  selector: 'app-admin-post-list',
  templateUrl: './admin-post-list.component.html',
  styleUrls: ['./admin-post-list.component.scss'],
  providers: [BlogService]

})
export class AdminPostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  private postsSubscription: Subscription;

  constructor(public bloggingService: BlogService) { }

  ngOnInit() {
    this.isLoading = true;
    this.bloggingService.getPosts();
    this.postsSubscription = this.bloggingService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    })
  }

  onDelete(postId: string) {
    this.bloggingService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }



}
