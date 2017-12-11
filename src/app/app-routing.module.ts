import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }  from './sign-in/sign-in.component';
import { MyPageComponent }  from './my-page/my-page.component';
import { ProductListComponent }  from './product-list/product-list.component';
import { ProductItemComponent }  from './product-item/product-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'my-page', component: MyPageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
