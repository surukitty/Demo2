import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredient: Ingredient[]=[
new Ingredient('South Mumbai',4),
new Ingredient('Central Mumbai',7),
new Ingredient('Thane',3),
new Ingredient('Western Mumbai',2),

];



  constructor() { }

  ngOnInit(): void {
  }

}
