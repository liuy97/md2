import {
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[md2-menu-content]',
  host: { 'role': 'menu' },
  template: '<ng-content></ng-content>',
  styleUrls: ['menu.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Md2MenuContent { }
