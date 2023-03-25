import { Component, OnInit } from '@angular/core';
import { PostsDataService } from 'src/app/shared/posts-data.service';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {

  comments:any = {};
  postData:any = {};
  constructor(private posts: PostsDataService) { }

  ngOnInit(): void {
    this.posts.getPostComments(this.posts.getPostId()).subscribe((data)=>{
      this.comments = data;
    })
    this.posts.getPost(this.posts.getPostId()).subscribe((data)=>{
      this.postData = data;
    })

  }

}
