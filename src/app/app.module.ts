import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { HomeModule } from './layouts/home/home.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CategoryBoxComponent } from './components/category-box/category-box.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserService } from './services/user.service';
import { SliderComponent } from './components/slider/slider.component';
import { DetailComponent } from './pages/detail/detail.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { StarComponent } from './components/star/star.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CardComponent,
    CategoryBoxComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    DetailComponent,
    QuantityComponent,
    StarComponent,
    ShopCartComponent,
    CheckoutComponent,
    PaymentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    HomeModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxImageZoomModule,
    ToastrModule.forRoot(),
  ],
  providers: [UserService],
  schemas: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
