import {
  Component,
} from '@angular/core';

@Component({
  selector: '[md2-menu-item]',
  host: {
    'role': 'menuitem'
  },
  template: '<ng-content></ng-content>'
})
export class Md2MenuItem { }
