import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Grocery } from 'src/app/model/grocery.model';
import { AuthService } from 'src/app/services/auth.service';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public addForm: any;

  constructor(
    private fb: FormBuilder,
    private store: AngularFirestore,
    public authService: AuthService,
    public groceryService: GroceryService
  ) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl(''),
    });
  }

  submit(): void {
    const grocery: Grocery = new Grocery();
    grocery.isChecked = false;
    grocery.quantity = this.addForm.value.quantity;
    grocery.title = this.addForm.value.name;

    this.store
      .collection('list')
      .doc(this.authService?.userData?.uid)
      .collection('list')
      .add({
        title: grocery.title,
        quantity: grocery.quantity,
        isChecked: grocery.isChecked,
      });
  }
}
