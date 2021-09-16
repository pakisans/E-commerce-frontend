import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import jwt_decode from "jwt-decode";
import { decode } from 'querystring';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;

  public getLoggedInEmail = new Subject();

  constructor(
    private fb : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
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

        this.loginService.login(email, password).subscribe(res => {
          localStorage.setItem('token', res.token);
          let any = JSON.stringify(jwt_decode(res.token));
          let mail = JSON.parse(any).sub;
          localStorage.setItem('currentMail', mail)
          this.router.navigate(['/products'])
        });

        // var data:FormData = new FormData();
        // data.append("username", email);
        // data.append("password",password);
        // data.append("client_secret","client_secret");
        // data.append("client_id","client_id");
        // data.append("grant_type","password");
        // this.oauth.login(data).subscribe((response: any) => {

        //   localStorage.setItem('token', response.access_token);
        //   // localStorage.setItem('currentUser', data);
        // })




       
    }

    
    

  }

}
