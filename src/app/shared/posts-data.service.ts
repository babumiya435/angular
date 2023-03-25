import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {
  private data:any;
  private validation:boolean = false;

  constructor(private httpClient: HttpClient) { }
  getUsers(){
    return this.httpClient.get("assets/data.json");
  }
  getPosts(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
  getPostComments(id:number){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
  }
  getPost(id:number){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }
  getPostId(): number {
    return window.localStorage['postId'];
  }

  savePostId(token: number) {
    window.localStorage['postId'] = token;
  }

  destroyPostId() {
    window.localStorage.removeItem('postId');
  }
  attemptAuth(credentials:any) {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.data = data;
    })
    if(this.data){
      console.log("from service",credentials,this.data);
      this.data.forEach((e: { userName: string; password: string; }) => {
        if(e.userName === credentials.username && e.password === credentials.password){
          this.validation =  true;
        }
      });
    }
    return this.validation;
  }
}
