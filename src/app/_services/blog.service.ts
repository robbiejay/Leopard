import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../_models/post.model';

@Injectable({providedIn: 'root'})
export class BlogService {
private posts: Post[] = [];
private postsUpdated = new Subject<Post[]>();

constructor(private http: HttpClient, private router: Router) { }

getPosts() {
  this.http
  .get<{ message: string; posts: any }>(
    'http://localhost:3000/api/posts'
  )
  .pipe(
    map(postData => {
    return postData.posts.map(post => {
      return {
        title: post.title,
        subtitle: post.subtitle,
        content: post.content,
        summary: post.summary,
        postType: post.postType,
        id: post._id,
        imagePath: post.imagePath
      };
    });
  })
)
  .subscribe(transformedPosts => {
    this.posts = transformedPosts;
    this.postsUpdated.next([...this.posts]);
  });
}

getActivites() {
  this.http
  .get<{ message: string; posts: any }>(
    'http://localhost:3000/api/posts/activities'
  )
  .pipe(
    map(postData => {
    return postData.posts.map(post => {
      return {
        title: post.title,
        subtitle: post.subtitle,
        content: post.content,
        summary: post.summary,
        postType: post.postType,
        id: post._id,
        imagePath: post.imagePath
      };
    });
  })
)
  .subscribe(transformedPosts => {
    this.posts = transformedPosts;
    this.postsUpdated.next([...this.posts]);
  });
}

getWhatsNew() {
  this.http
  .get<{ message: string; posts: any }>(
    'http://localhost:3000/api/posts/whats-new'
  )
  .pipe(
    map(postData => {
    return postData.posts.map(post => {
      return {
        title: post.title,
        subtitle: post.subtitle,
        content: post.content,
        summary: post.summary,
        postType: post.postType,
        id: post._id,
        imagePath: post.imagePath
      };
    });
  })
)
  .subscribe(transformedPosts => {
    this.posts = transformedPosts;
    this.postsUpdated.next([...this.posts]);
  });
}



getPostUpdateListener() {
  return this.postsUpdated.asObservable();
}

getPost(id: string) {
  return this.http.get<{
    _id: string,
    title: string,
    subtitle: string,
    content: string,
    summary: string,
    postType: string,
    imagePath: string
  }>('http://localhost:3000/api/posts/' + id);
}

addPost(
  title: string,
  subtitle: string,
   content: string,
   summary: string,
   postType: string,
   image: File
 ) {

const postData = new FormData();
postData.append("title", title);
postData.append("subtitle", subtitle);
postData.append("content", content);
postData.append("summary", summary);
postData.append("postType", postType);
postData.append("image", image, title);

// const post: Post = {id: null, title: title, subtitle: subtitle, content: content, summary: summary};
this.http
.post<{message: string; post: Post}>(
  'http://localhost:3000/api/posts',
  postData
)
.subscribe(responseData => {
  const post: Post = {
    id: responseData.post.id,
    title: title,
    subtitle: subtitle,
    content: content,
    summary: summary,
    postType: postType,
    imagePath: responseData.post.imagePath
  }
  this.posts.push(post);
  this.postsUpdated.next([...this.posts]);
  this.router.navigate(["/admin-post-list"]);
});
}

updatePost(
  id: string,
  title: string,
  subtitle: string,
  content: string,
  summary: string,
  postType: string,
  image: File | string
) {
  let postData: Post | FormData;
  if (typeof image === 'object') {
    postData = new FormData();
    postData.append("id", id);
    postData.append("title", title);
    postData.append("subtitle", subtitle);
    postData.append("content", content);
    postData.append("summary", summary);
    postData.append("postType", postType);
    postData.append("image", image, title);
  } else {
    postData = {
      id: id,
      title: title,
      subtitle: subtitle,
      content: content,
      summary: summary,
      postType: postType,
      imagePath: image
    };

  }
  this.http
  .put("http://localhost:3000/api/posts/" + id, postData)
  .subscribe(response => {
      const updatedPosts = [...this.posts];
      const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
      const post: Post = {
        id: id,
        title: title,
        subtitle: subtitle,
        content: content,
        summary: summary,
        postType: postType,
        imagePath: ""
      }
      updatedPosts[oldPostIndex] = post;
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(['/admin-post-list']);
    });
}

deletePost(postId: string) {
  this.http.delete("http://localhost:3000/api/posts/" + postId)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    })
}



}
