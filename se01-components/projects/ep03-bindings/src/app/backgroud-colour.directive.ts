import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBackgroudColour]'
})
export class BackgroudColourDirective implements OnChanges {
  @Input()
  appBackgroudColour?: string

  constructor(private renderer: Renderer2, private element: ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.appBackgroudColour) {
      this.renderer.setStyle(this.element.nativeElement, "background-color", this.appBackgroudColour)
    }
  }



}
