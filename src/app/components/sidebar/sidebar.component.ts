import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openSideBar(): void {
    this.isOpen = true
  }

  public closeSideBar(): void {
    this.isOpen = false
  }
}
