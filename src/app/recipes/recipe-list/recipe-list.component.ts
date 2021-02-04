import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('Fruit Salad','Price:200','assets/fruitss.jpg'),
    new Recipe('Paani Puri','Price:50','assets/panipuri.jpg'),
    new Recipe('Aloo Chat','Price:100','assets/aloochat.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
