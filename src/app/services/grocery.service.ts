import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Grocery } from '../model/grocery.model';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  groceries: BehaviorSubject<Grocery[]> = new BehaviorSubject<Grocery[]>([]);
  constructor() {}
}
