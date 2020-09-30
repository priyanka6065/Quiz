import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-quizsettings',
  templateUrl: './quizsettings.component.html',
  styleUrls: ['./quizsettings.component.css']
})
export class QuizsettingsComponent implements OnInit {
  public categories: Array<any> = [];
  public categoryId: unknown;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onCategorySelected(value: string) {
    this.categoryId = value;
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        this.categories.push(data[i])
      }
    })
  }
}
