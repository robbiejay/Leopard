import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  form: FormGroup;

  private mode = 'create';
  private postId: string;


  constructor(public bloggingService: BlogService,
              public route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      'title': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }),
      'subtitle': new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      'content': new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      'summary': new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
    });

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
          };
          this.form.setValue({
            'title': this.post.title,
            'subtitle': this.post.subtitle,
            'content': this.post.content,
            'summary': this.post.summary
          });
        });

      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onPostUpload() {
    this.isLoading = true;
    if(this.mode === 'create') {
      this.bloggingService.addPost(

        this.form.value.title,
        this.form.value.subtitle,
        this.form.value.content,
        this.form.value.summary

      );
    } else {
      this.bloggingService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.subtitle,
        this.form.value.content,
        this.form.value.summary

      );
    }
  this.form.reset();
    }

  //  this.bloggingService.onPostAdded(post);
  //  this.authService.signinUser(title, subtitle, content, summary);
  }
