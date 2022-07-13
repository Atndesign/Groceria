import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Grocery } from 'src/app/model/grocery.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input()
  item: Grocery = new Grocery();

  isChecked: boolean = false;

  constructor(private fs: AngularFirestore) {}

  ngOnInit(): void {}

  public checkItem(id: number): void {
    this.isChecked = !this.isChecked;
    console.log(id);
  }
}
