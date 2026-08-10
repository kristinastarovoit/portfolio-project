import { Service, inject } from '@angular/core';
import { Router } from '@angular/router';

@Service()
export class TosectionService {
    private router = inject(Router);

    scrollToSection(sectionId: string) {
        const isMainPage = this.router.url === '/' || this.router.url.startsWith('/?') || this.router.url.startsWith('/#');

        if (isMainPage) {
            this.scrollNow(sectionId);
        } else {
            this.router.navigate(['/'], { fragment: sectionId });
        }
    }

    scrollNow(sectionId: string) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
}
