import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingCategoryComponent } from './clothing-category/clothing-category.component';
import { ElectronicsCategoryComponent } from './electronics-category/electronics-category.component';
import { PetProductsCategoryComponent } from './pet-products-category/pet-products-category.component';

const routes: Routes = [
  { path: 'clothing', component: ClothingCategoryComponent },
  { path: 'electronics', component: ElectronicsCategoryComponent },
  { path: 'pet-products', component: PetProductsCategoryComponent },
  { path: '', component: ClothingCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
