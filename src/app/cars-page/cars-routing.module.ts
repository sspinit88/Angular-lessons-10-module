import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarPageComponent} from './car-page/car-page.component';
import {CarsPageComponent} from './cars-page.component';

// для избегания задваивания удаляем 'cars' из CarsRoutingModule
// пустая строка автоматически будет заменяться на 'cars'
const carsRoutes: Routes = [
    {
        path: '', component: CarsPageComponent, children: [
            {path: ':id/:name', component: CarPageComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(carsRoutes)],
    exports: [RouterModule]
})

export class CarsRoutingModule {
}