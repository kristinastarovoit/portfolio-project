import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicButton } from './magic-button';

describe('MagicButton', () => {
  let component: MagicButton;
  let fixture: ComponentFixture<MagicButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicButton],
    }).compileComponents();

    fixture = TestBed.createComponent(MagicButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
