import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../../_models/post.model';
import { BlogService } from '../../_services/blog.service';

@Component({
  selector: 'app-staff-activities',
  templateUrl: './staff-activities.component.html',
  styleUrls: ['./staff-activities.component.scss']
})
export class StaffActivitiesComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  private postsSubscription: Subscription;
    constructor(private bloggingService: BlogService) { }

    ngOnInit() {
      this.isLoading = true;
      this.bloggingService.getActivites();
      this.postsSubscription = this.bloggingService.getPostUpdateListener().subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      })
    }

    ngOnDestroy() {
      this.postsSubscription.unsubscribe();
    }

}
