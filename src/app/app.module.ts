import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothingCategoryComponent } from './clothing-category/clothing-category.component';
import { ElectronicsCategoryComponent } from './electronics-category/electronics-category.component';
import { PetProductsCategoryComponent } from './pet-products-category/pet-products-category.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClothingCategoryComponent,
    ElectronicsCategoryComponent,
    PetProductsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
