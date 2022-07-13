import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public isOpen: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public openSideBar(): void {
    this.isOpen = true;
  }

  public closeSideBar(): void {
    this.isOpen = false;
  }

  public signOut(): void {
    this.authService.SignOut();
  }
}
