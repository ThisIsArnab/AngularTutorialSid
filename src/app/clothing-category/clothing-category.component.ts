import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClothingCategory } from './clothing-category.interface';
import { ClothingCategoryService } from './clothing-category.service';

@Component({
  selector: 'app-clothing-category',
  templateUrl: './clothing-category.component.html',
  styleUrls: ['./clothing-category.component.scss']
})
export class ClothingCategoryComponent implements OnInit {

  // Observable provides you with the data
  allClothingItems: Observable<ClothingCategory[]> | undefined;

  // inject the ClothingCategoryService through dependency injection
  constructor(private clothingCategorySvc: ClothingCategoryService) { }

  ngOnInit(): void {
    this.allClothingItems = this.clothingCategorySvc.getAllClothingItems();
  }

}
