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
    message: ['', [Validators.required, Validators.minLength(10)]],
    checkbox: [false, [Validators.requiredTrue]]
  });

  isFormInvalid() {
    return this.name?.invalid || this.email?.invalid || this.message?.invalid || this.checkbox?.invalid;
  };

  async submitForm() {
    this.contactForm.markAllAsTouched();

    if (this.isFormInvalid()) {
      return;
    }

    try {
      const response = await fetch('https://kristina-starovoit.de/php_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          consent: this.contactForm.value.checkbox
        })
      });

      const result = await response.json();

      if (result.success) {
        this.contactForm.reset();
      }
    } catch (err) {
    }
  }

  get name() {
    return this.contactForm.get("name");
  };

  get email() {
    return this.contactForm.get("email");
  };

  get message() {
    return this.contactForm.get("message");
  };

  get checkbox() {
    return this.contactForm.get("checkbox");
  };

  nameInvalidTouched() {
    return !this.name?.valid && this.name?.touched
  }

  emailInvalidTouched() {
    return !this.email?.valid && this.email?.touched
  }

  messageInvalidTouched() {
    return !this.message?.valid && this.message?.touched
  }
}
