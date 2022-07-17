import { Grocery } from 'src/app/model/grocery.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input()
  item: any;

  isChecked: boolean = false;

  constructor(private fs: AngularFirestore, private authService: AuthService, private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.isChecked = this.item.isChecked;
  }

  public checkItem(id: string): void {
    this.isChecked = !this.isChecked;
    console.log(id);
  }

  public deleteItem(id: string): void {
    this.groceryService.deleteGrocery(id)
  }
} 
