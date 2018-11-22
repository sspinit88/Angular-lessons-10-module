import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarPageComponent} from './car-page/car-page.component';
import {CarsPageComponent} from './cars-page.component';

// тут описываем все роуты, относящиеся к машинам
const carsRoutes: Routes = [
    {
        path: 'cars', component: CarsPageComponent, children: [
            {path: ':id/:name', component: CarPageComponent}
        ]
    },
];

// ! используется метод '.forChild()' , так как это дочерние компоненты

@NgModule({
    imports: [RouterModule.forChild(carsRoutes)],
    exports: [RouterModule]
})

// регистрируем модуль в cars.module.ts

export class CarsRoutingModule {
}