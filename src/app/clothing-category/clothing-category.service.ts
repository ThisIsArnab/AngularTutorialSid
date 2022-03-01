import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClothingCategory } from './clothing-category.interface';

@Injectable({
  providedIn: 'root'
})
export class ClothingCategoryService {

  constructor(private http: HttpClient) { }

  getAllClothingItems(): Observable<ClothingCategory[]> {
    return this.http.get<ClothingCategory[]>('/assets/clothingItems.json');
  }
}
