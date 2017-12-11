import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock/in-memory-data.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './button/button.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MyPageComponent } from './my-page/my-page.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SettlementComponent } from './settlement/settlement.component';
import { ProductService } from './service/product.service';
import { CartService } from './cart.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ButtonComponent,
    ProductItemComponent,
    MyPageComponent,
    CartComponent,
    SignInComponent,
    SettlementComponent
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
