import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//services
import { LoginService } from './services/service-login/login.service'
//Angular material
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
 } from '@angular/material';

//Components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/home/index/index.component';
import { HeaderComponent } from './common/header/header.component';
import { LogoComponent } from './common/logo/logo.component';
import { MenuComponent } from './common/menu/menu.component';
import { CameraComponent } from './components/home/camera/camera.component';
import { VisionService } from './services/vision.service';
import { ProductCatalogService } from './services/product-catalog.service';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { BuyProductComponent } from './components/buy-product/buy-product.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'productos', component: ProductCatalogComponent },
      { path: 'producto/comprar', component: BuyProductComponent },
      { path: 'customer/profile', component: CustomerProfileComponent }
    ]
  }

];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    CameraComponent,
    ProductCatalogComponent,
    BuyProductComponent,
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    CameraComponent
  ],
  providers: [
    LoginService,
    VisionService,
    LoginService,
    VisionService,
    ProductCatalogService
  ]
})
export class AppRoutingModule { }
