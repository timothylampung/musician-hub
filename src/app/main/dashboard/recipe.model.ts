export interface Recipe {
  name: string;
  description?: string;
  serial: string;
  ingredients: Ingredient[];
  cookingTime: number;
  imageUrl?: string;
  status?: string;
}

export interface Ingredient {
  name: string;
  address: string;
}

export interface NewRecipe {
  id : number;
  name: string;
  imageUrl: string;
  functionSelected: number;
  preHeatDur: number;
  oilPumpDur: number;
  waterPumpDur: number;
  cookingTemp: number;
  cookingDur: number;
  status: string;
}

export interface RecipeData {
  recipes : NewRecipe[]
}
