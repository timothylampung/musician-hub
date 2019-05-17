import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewRecipe, RecipeData } from '../app/main/dashboard/recipe.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class KitchenService {

  constructor(private http: HttpClient) {
  }

  getAvailablePorts() {
    return this.http.get('http://127.0.0.1:8000/quickstart/ports', httpOptions);
  }

  cook(result) {
    console.log('cooking');
    return this.http.post('http://127.0.0.1:8000/quickstart/cooks', JSON.stringify(result), httpOptions);
  }

  cookStatus(result) {
    console.log('cooking');
    return this.http.post('http://127.0.0.1:8000/quickstart/cooking-status', JSON.stringify(result), httpOptions);
  }

  saveRecipes(recipe: NewRecipe) {
    return this.http.post('http://127.0.0.1:8000/quickstart/recipes', JSON.stringify(recipe), httpOptions);
  }

  getRecipes(): Observable<RecipeData> {
    return this.http.get<RecipeData>('http://127.0.0.1:8000/quickstart/recipes', httpOptions);
  }

  getRecipeByName(name: string): Observable<NewRecipe> {
    return this.http.get<NewRecipe>('http://127.0.0.1:8000/quickstart/recipes?name=' + name, httpOptions);
  }

  deleteRecipe(id: number) {
    return this.http.delete('http://127.0.0.1:8000/quickstart/recipes?id=' + id, httpOptions);
  }

}
