import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[minhaDirective]'
})
export class MinhaDirective {
  private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }

  @Input('minhaDirective') corDaminhaDirective: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.mudarCor(this.corDaminhaDirective || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.mudarCor(null);
  }

  private mudarCor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
