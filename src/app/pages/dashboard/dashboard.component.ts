import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Grocery } from 'src/app/model/grocery.model';
import { AuthService } from 'src/app/services/auth.service';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  isEditing: boolean = false;
  groceries: any = [];

  constructor(
    public authService: AuthService,
    private store: AngularFirestore,
    private groceryService: GroceryService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.store
      .collection('list')
      .doc(this.authService.userData.uid)
      .collection('list')
      .valueChanges()
      .subscribe((rep: any) => {
        this.groceries = rep;
        console.log(rep);
        this.groceryService.groceries.next(rep);
      });
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }
}
