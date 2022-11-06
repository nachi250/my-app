import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[appResaltarHostListener]'
})
export class ResaltarHostListenerDirective implements OnInit {
@Input() defaultColor: string;
@Input() resaltarColor: string;
  @HostBinding('style.background-color') backgroundColorElem;

  constructor(private eleRef: ElementRef, private rendered: Renderer2) { }

  ngOnInit(): void {
    console.log('ResaltarBasicoDirective dos');
   // const element = this.eleRef.nativeElement
   // this.rendered.setStyle(element, 'background-color', 'blue');
    this.backgroundColorElem = this.defaultColor
  }

@HostListener('mouseenter') mouseEnter(event: MouseEvent) {
  //const element = this.eleRef.nativeElement
  //this.rendered.setStyle(element, 'background-color', 'blue');
  this.backgroundColorElem = this.resaltarColor
}

@HostListener('mouseleave') mouseLeave(event: MouseEvent) {
  //const element = this.eleRef.nativeElement
  //this.rendered.setStyle(element, 'background-color', 'red');
  this.backgroundColorElem = this.defaultColor
}



}
