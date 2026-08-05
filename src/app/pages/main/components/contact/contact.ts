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
    name: ['Your name goes here', [Validators.required, Validators.minLength(3)]],
    email: ['youremail@email.com', [Validators.required, emailFormatValidator]],
    message: ['Hello Kristina, I am interested in...', [Validators.required, Validators.minLength(10)]]
  });

  submitForm() {
    console.log(this.contactForm.value);
  }
}
