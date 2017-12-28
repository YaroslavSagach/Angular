import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
  	new Ingredient('Pumpkin', 0.5),
  	new Ingredient('Potato', 3)
  ];

  getIngredients() {
  	return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient, update: boolean) {
    var curIngredient = this.ingredients.find((item: Ingredient) => item.name == ingredient.name);
    if (curIngredient != undefined) curIngredient.amount += ingredient.amount;
    else this.ingredients.push(ingredient);
    if (update) this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
  	ingredients.forEach((item: Ingredient) => this.addIngredient(item, false));
  	this.ingredientsChanged.next(this.ingredients.slice());
  }
}