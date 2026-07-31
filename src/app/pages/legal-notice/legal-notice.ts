import { Component } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { Header } from "../../layout/header/header";

@Component({
  selector: 'app-legal-notice',
  imports: [Footer, Header],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}
