import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe("Soup", "Pumpkin soup with bread", "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2017/06/07161106/pumpkin-soup-recipe.jpg"),
  	new Recipe("Smootie", "Some great smoothie for real programmer", "http://s.doctoroz.com/gallery/slides/banana-green-smoothie.gif")
  ];

  constructor() { }

  ngOnInit() {
  }

}
