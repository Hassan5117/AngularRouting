import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';

export const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: 'second', component: SecondComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'products', component: ProductslistComponent},
    {path: '**', component: NotFoundComponent}


]; // localhost:4200/first or /second
