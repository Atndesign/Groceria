import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public checkItem(): void {
    this.isChecked = !this.isChecked
  }
}
