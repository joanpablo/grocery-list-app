import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/Product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'gl-products-edit',
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

  get name(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.dialogRef.close({
      id: this.product.id,
      ...this.formGroup.value,
    });
  }
}
