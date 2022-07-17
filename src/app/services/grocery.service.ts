import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Grocery } from '../model/grocery.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  groceries: BehaviorSubject<Grocery[]> = new BehaviorSubject<Grocery[]>([]);
  constructor(
    private store: AngularFirestore,
    public authService: AuthService,
  ) { }

  getGroceries() {
    return this.store
      .collection('list')
      .doc(this.authService.userData.uid)
      .collection('list')
      .snapshotChanges()
  }

  updateGroceries(id: string, grocery: any) {
    this.store.collection("list").doc(this.authService.userData.uid).collection("list").doc(id).set(grocery);
  }

  deleteGrocery(id: string) {
    this.store.collection("list").doc(this.authService.userData.uid).collection("list").doc(id).delete();
  }
}
