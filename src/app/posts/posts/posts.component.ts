import { Component, OnInit } from '@angular/core';
import { PostsDataService } from 'src/app/shared/posts-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts:any = [];
  constructor(
    private posts: PostsDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // console.log(data);
    this.posts.getPosts().subscribe((data)=>{
      console.log(data);
      this.allPosts = data;
    })
  }
  navigate(postId:number){
    this.posts.savePostId(postId);
    this.router.navigateByUrl('/comments');
  }

}
