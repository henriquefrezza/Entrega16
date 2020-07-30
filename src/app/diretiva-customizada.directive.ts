import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDiretivaCustomizada]'
})
export class DiretivaCustomizadaDirective {

  constructor(private elementRef: ElementRef, 
    private renderer: Renderer2
  ) { 

    }

    @HostListener('mouseover') quandoOMousePassarEmCima(){
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'blue'
      )
    }

    @HostListener('mouseleave') quandoOMouseSair(){
      this.renderer.removeStyle(
        this.elementRef.nativeElement,
        'background-color'
      );
  }
}
