import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'cars', loadChildren: './cars-page/cars.module#CarsModule'}

];

// .forRoot() может принимать второй параметр, который является объектом
// у этого объекта, есть поле preloadingStrategy, который принимает класс PreloadAllModules
// теперь работает прелоадинг страницы


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
