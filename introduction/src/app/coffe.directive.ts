import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCoffe]'
})
export class CoffeDirective {

  constructor(element: ElementRef) {
    element.nativeElement.innerHTML = `<pre>    
    (  )   (   )  )
    ) (   )  (  (
    ( )  (    ) )
    _____________
   <_____________> ___
   |             |/ _ \\
   |               | | |
   |               |_| |
___|             |\\___/
/    \\___________/    \\
\\_____________________/<\pre>`
  }

}
