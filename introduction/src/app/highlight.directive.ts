import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef<HTMLHeadingElement>) {
    this.element.nativeElement.style.fontSize = '32px'
    this.element.nativeElement.style.transitionDuration = '1s'
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'grey';
  }  
  @HostListener('mouseleave') onMouseLEave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
