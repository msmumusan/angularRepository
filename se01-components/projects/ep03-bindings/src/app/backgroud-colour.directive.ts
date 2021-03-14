import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'appBackgroudColour'
})
export class BackgroudColourDirective implements OnChanges {
  @Input()
  appBackgroundColor?: string

  constructor(private renderer: Renderer2, private element: ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.appBackgroundColor) {
      this.renderer.setStyle(this.element.nativeElement, "background-color", this.appBackgroundColor)
    }
  }



}
