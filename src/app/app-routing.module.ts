import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent }  from './cart/cart.component';
import { SignInComponent }  from './sign-in/sign-in.component';
import { MyPageComponent }  from './my-page/my-page.component';
import { ProductListComponent }  from './product-list/product-list.component';
import { ProductItemComponent }  from './product-item/product-item.component';
import { SettlementComponent }  from './settlement/settlement.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'my-page', component: MyPageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemComponent },
  { path: 'settlement', component: SettlementComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
