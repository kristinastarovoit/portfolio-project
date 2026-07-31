import { Routes } from '@angular/router';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { MainPage } from './pages/main/main-page/main-page';

export const routes: Routes = [{
    path: '',
    component: MainPage
},
{
    path: 'legalnotice',
    component: LegalNotice
}
];
