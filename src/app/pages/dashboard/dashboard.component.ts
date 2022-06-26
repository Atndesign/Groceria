import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Grocery } from 'src/app/model/grocery.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  grocery = this.store.collection('list').valueChanges({ idField: 'id' });
  list = [];

  constructor(
    public authService: AuthService,
    private store: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.store.collection('list').get(this.authService.userData.uid).subscribe(rep =>
      console.log(rep))
  }

}
