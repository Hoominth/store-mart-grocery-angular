import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces';

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css'],
})
export class CategoryBoxComponent {
  @Input() data: Category[] = [];
}
