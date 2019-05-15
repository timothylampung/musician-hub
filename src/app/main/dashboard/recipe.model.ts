export interface Recipe {
  name : string;
  description?: string;
  serial : string;
  ingredients : Ingredient[];
  cookingTime : number;
  imageUrl? : string;
}

export interface Ingredient {
  name : string;
  address : string;
}
