import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  public category: Category = <any>{};
  public CategoryId: number = 0;

  constructor(private service: CategoryService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if(params['id'] != null)
      {
        this.CategoryId = params['id'];
        this.onEdit(this.CategoryId);
      }
    })
  }

  
  onEdit(id : number){
    this.service.getCategoryById(id).subscribe(data => {
      this.category = data;
    })
  }

  onCreate() {
    this.service.createCategory(this.category).subscribe(data => {
      this.router.navigate(['categories']);
    })
  }

  onUpdate(id: number) {
    this.service.updateCategory(id, this.category).subscribe(data => {
      this.router.navigate(['categories']);
    })
  }

}
