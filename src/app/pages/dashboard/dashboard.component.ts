import { AfterViewInit, Component, OnInit } from '@angular/core';
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
    private groceryService: GroceryService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.groceryService.getGroceries().subscribe((rep: any) => {
      this.groceries = rep.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Grocery)
        }
      })
    })
  }


  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }
}
