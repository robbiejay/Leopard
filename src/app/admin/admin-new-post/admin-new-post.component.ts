import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../../_services/blog.service';
import { Post } from '../../_models/post.model';

@Component({
  selector: 'app-admin-new-post',
  templateUrl: './admin-new-post.component.html',
  styleUrls: ['./admin-new-post.component.scss'],
  providers: [BlogService]
})
export class AdminNewPostComponent implements OnInit {
  post: Post;
  isLoading = false;
  private mode = 'create';
  private postId: string;


  constructor(public bloggingService: BlogService,
              public route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.bloggingService.getPost(this.postId)
        .subscribe(postData => {
          this.isLoading = false;
          this.post = {
            id: postData._id,
            title: postData.title,
            subtitle: postData.subtitle,
            content: postData.content,
            summary: postData.summary
          }
        });

      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onPostUpload(form: NgForm) {
    this.isLoading = true;
    if(this.mode === 'create') {
      this.bloggingService.addPost(

        form.value.title,
        form.value.subtitle,
        form.value.content,
        form.value.summary

      );
    } else {
      this.bloggingService.updatePost(
        this.postId,
        form.value.title,
        form.value.subtitle,
        form.value.content,
        form.value.summary

      );
    }


  form.resetForm();
    }

  //  this.bloggingService.onPostAdded(post);
  //  this.authService.signinUser(title, subtitle, content, summary);
  }
