import { Routes } from '@angular/router';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { MainPage } from './pages/main/main-page/main-page';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [{
    path: '',
    component: MainPage
},
{
    path: 'legalnotice',
    component: LegalNotice
},
{
    path: 'privacypolicy',
    component: PrivacyPolicy
}

];
