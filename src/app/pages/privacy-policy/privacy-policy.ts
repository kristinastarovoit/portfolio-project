import { Component,inject } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
}
