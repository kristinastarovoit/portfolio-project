import { Service } from '@angular/core';

@Service()
export class TosectionService {
    scrollToSection(sectionId: string) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
}
