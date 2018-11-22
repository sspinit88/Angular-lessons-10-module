import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarPageComponent} from './car-page/car-page.component';
import {CarsPageComponent} from './cars-page.component';
import {CarsService} from '../cars.service';
import {CarsRoutingModule} from './cars-routing.module';

// добавляем @NgModule, в нем будут регистрироваться компоненты в массиве "declarations"
@NgModule({
    declarations: [
        CarsPageComponent,
        CarPageComponent,
    ],
    providers: [
        CarsService
    ],
    // важно подключать CommonModule, что бы основные команды работали в этом изолированном модуле
    imports: [
        CommonModule,
        CarsRoutingModule
    ]
})

// регистрация модуля осуществляется по его названию в корневом модуле, то есть в app.module.ts
// регистрация проводится в массиве 'imports'

// ! важно подключить роутинг модуль (cars-routing.module.ts)

export class CarsModule {}