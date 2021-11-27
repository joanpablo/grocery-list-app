import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/Product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

/**
 * Represents the dialog to edit a product.
 */
@Component({
  selector: 'gl-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss'],
})
export class ProductsEditComponent {
  /**
   * The Form for editing the product.
   */
  formGroup: FormGroup;

  /**
   * Constructs an instance of the ProductsEditComponent.
   * @param dialogRef an instance of the reference to the dialog.
   * @param product the product to be edited.
   * @param formBuilder an instance of the builder to create Forms.
   */
  constructor(
    private dialogRef: MatDialogRef<ProductsEditComponent>,
    @Inject(MAT_DIALOG_DATA) private product: Product,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      name: [product.name, Validators.required],
      description: [product.description],
    });
  }

  /**
   * Gets the control that represents the name of the product.
   */
  get name(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  /**
   * Cancel the edition of the product and close the dialog.
   */
  cancel(): void {
    this.dialogRef.close();
  }

  /**
   * Check if the product edition is valid and close the dialog passing the new product data.
   */
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
