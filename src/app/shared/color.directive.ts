import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.color') color = 'black';

  ngOnInit() {
    this.color = 'blue';
  }
}

// для того, что бы сущьность корректно работала во всех модулях,
// она должна лежать в своем собственном модуле (shared.module.ts)
