import { Directive, OnInit, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appResaltarDos]'
})
export class ResaltarDosDirective implements OnInit {

  constructor(private eleRef: ElementRef, private rendered: Renderer2) { }

  ngOnInit(): void {
    console.log('ResaltarBasicoDirective dos');
    const element = this.eleRef.nativeElement
    this.rendered.setStyle(element, 'background-color', 'blue');
  }

}
