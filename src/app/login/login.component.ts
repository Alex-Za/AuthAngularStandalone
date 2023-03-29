import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../global/services/auth.service";
import {Router, RouterModule} from "@angular/router";
import {AuthRequest} from "../global/entity/auth-request";
import {Emitters} from "../global/emitters";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void {
    const authRequest = new AuthRequest(this.form.value.email, this.form.value.password)

    this.authService.authenticate(authRequest).subscribe(() => {
      Emitters.authEmitter.next(true)
      this.router.navigate(['/'])
    })
  }

}
