import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailFormatValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    const emailRegex = /^\S+@\S+(\.[a-zA-Z]{2,})+$/;
    return emailRegex.test(email) ? null : { invalidEmailFormat: { value: email } };
}