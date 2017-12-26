import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
  	new Recipe(
  		"Soup",
  		"Pumpkin soup with bread",
  		"https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2017/06/07161106/pumpkin-soup-recipe.jpg",
  		[
  			new Ingredient("Pumpkin", 0.5),
  			new Ingredient("Potato", 3)
  		]
  	),
  	new Recipe(
  		"Smootie",
  		"Some great smoothie for real programmer",
  		"http://s.doctoroz.com/gallery/slides/banana-green-smoothie.gif",
  		[
  			new Ingredient("Banana", 2),
  			new Ingredient("Kiwi", 3)
  		]
  	)
  ];

  constructor(private slService: ShoppingListService) {}


  getRecipes() {
  	return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  	this.slService.addIngredients(ingredients);
  }
}