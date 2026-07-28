import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeelSticker } from './peel-sticker';

describe('PeelSticker', () => {
  let component: PeelSticker;
  let fixture: ComponentFixture<PeelSticker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeelSticker],
    }).compileComponents();

    fixture = TestBed.createComponent(PeelSticker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
