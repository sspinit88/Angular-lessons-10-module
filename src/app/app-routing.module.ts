import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

// из app.module удаляем 'CarsModule'

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    // создаем объект, который будет отвечать за роут машин
    // loadChildren - будет подгружать компонент тогда, когда нам нужно
    // указыввает путь до модуля, а также, через '#', указывается название класса,
    // который нужно подгрузить

    // для избегания задваивания удаляем 'cars' из CarsRoutingModule

    {path: 'cars', loadChildren: './cars-page/cars.module#CarsModule'}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
