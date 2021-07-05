import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;

  constructor(
    private fb : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authService: AuthService
  ) { this.form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });}

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void>{
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
     
        const email = this.form.get('email')?.value;
        const password = this.form.get('password')?.value;
       
  }

  }

}
