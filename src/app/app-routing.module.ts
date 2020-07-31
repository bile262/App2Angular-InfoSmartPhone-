import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProductComponent } from './product/product.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '',redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'products', component: ProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
