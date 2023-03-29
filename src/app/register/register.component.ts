import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../global/services/auth.service";
import {Router, RouterModule} from "@angular/router";
import {RegisterRequest} from "../global/entity/register-request";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
  }

  submit(): void {
    const registerRequest = new RegisterRequest(
      this.form.value.firstname,
      this.form.value.lastname,
      this.form.value.email,
      this.form.value.password
    )
    this.authService.register(registerRequest).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

}
