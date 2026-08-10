import { Component, OnDestroy, ElementRef, AfterViewInit, signal } from '@angular/core';

type CursorType = 'default' | 'pointer' | 'grab' | 'grabbing';

@Component({
  selector: 'app-cursor',
  imports: [],
  templateUrl: './cursor.html',
  styleUrl: './cursor.scss',
})
export class Cursor implements AfterViewInit, OnDestroy {

  private cursorDot!: HTMLElement;
  private cursorOutline!: HTMLElement;

  private mouseX = 0;
  private mouseY = 0;

  private outlineX = 0;
  private outlineY = 0;

  private animationFrame: number | undefined;
  private isActive = false;

  protected readonly cursorType = signal<CursorType>('default');

  private readonly onPointerMove = (event: PointerEvent): void => {
    if (event.pointerType !== 'mouse') {
      return;
    }

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  };

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    this.cursorDot = this.elementRef.nativeElement.querySelector('.cursor-dot')!;
    this.cursorOutline = this.elementRef.nativeElement.querySelector('.cursor-outline')!;

    if (!this.cursorDot || !this.cursorOutline) {
      console.error('Cursor elements wurden nicht gefunden.');
      return;
    }

    this.isActive = true;

    document.addEventListener('pointermove', this.onPointerMove, { passive: true });
    this.animate();
  }

  private animate(): void {
    if (!this.isActive) {
      return;
    }

    this.cursorDot.style.transform =
      `translate(${this.mouseX}px, ${this.mouseY}px) translate(-50%, -50%)`;

    this.outlineX += (this.mouseX - this.outlineX) * 0.12;
    this.outlineY += (this.mouseY - this.outlineY) * 0.12;

    this.cursorOutline.style.transform =
      `translate(${this.outlineX}px, ${this.outlineY}px) translate(-50%, -50%)`;

    this.updateCursorType();

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  private updateCursorType(): void {
    const element = document.elementFromPoint(this.mouseX, this.mouseY) as HTMLElement | null;

    const grabEl = element?.closest('[draggable="true"], .grabbable');
    const pointerEl = element?.closest('a, button, [routerLink], [role="button"], input, select, textarea, label');

    const newType: CursorType = grabEl ? 'grab' : pointerEl ? 'pointer' : 'default';

    if (newType !== this.cursorType()) {
      this.cursorType.set(newType);
    }
  }

  ngOnDestroy(): void {
    this.isActive = false;

    if (this.animationFrame !== undefined) {
      cancelAnimationFrame(this.animationFrame);
    }

    document.removeEventListener('pointermove', this.onPointerMove);
  }
}