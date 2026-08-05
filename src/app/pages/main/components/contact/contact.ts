import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { emailFormatValidator } from '../../../../validators/mail_validator';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, emailFormatValidator]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isFormInvalid() {
    return this.name?.invalid || this.email?.invalid || this.message?.invalid;
  }

  submitForm() {
    console.log(this.contactForm.value);
    this.contactForm.markAllAsTouched();
  }

  get name() {
    return this.contactForm.get("name");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get message() {
    return this.contactForm.get("message");
  }
}
