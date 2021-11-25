import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss'],
})
export class ProductsEditComponent {
  formGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ProductsEditComponent>,
    @Inject(MAT_DIALOG_DATA) private product: Product,
    private fb: FormBuilder
  ) {
    this.formGroup = fb.group({
      name: [product.name, Validators.required],
      description: [product.description],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({
      id: this.product.id,
      ...this.formGroup.value,
    });
  }
}
