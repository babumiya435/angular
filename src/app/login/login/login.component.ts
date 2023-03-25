import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsDataService } from 'src/app/shared/posts-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting = false;
  authForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private posts: PostsDataService,
    private router: Router
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.title = 'Sign in';
  }

  submitForm() {
    const credentials = this.authForm.value;
    const validated = this.posts.attemptAuth(credentials);
    if(validated){
      this.isSubmitting = true;
      this.router.navigateByUrl('/posts');
    }
  }
}
