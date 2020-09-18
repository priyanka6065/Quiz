import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    })
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete " + name)) {
      this.service.deleteCategory(id).subscribe(data => {
        this.getCategories();
      })
    }
  }

}
