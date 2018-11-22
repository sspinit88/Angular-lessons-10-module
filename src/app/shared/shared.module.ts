import {NgModule} from '@angular/core';
import {ColorDirective} from './color.directive';

// важно внести сущность в поля declarations и exports
// после, этот модуль импортируется в app.module.ts, cars.module.ts, т.е. везде, где используется

@NgModule({
    declarations: [ColorDirective],
    exports: [ColorDirective]
})

export class SharedModule {

}