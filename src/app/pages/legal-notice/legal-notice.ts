import { Component } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { Header } from "../../layout/header/header";
import { TranslatePipe } from '@ngx-translate/core';
import { Cursor } from '../../cursor/cursor';

@Component({
  selector: 'app-legal-notice',
  imports: [Footer, Header, TranslatePipe, Cursor],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}
