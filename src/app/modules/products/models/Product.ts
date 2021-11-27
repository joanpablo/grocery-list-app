/**
 * Represents a product of the grocery list
 */
export interface Product {
  /**
   * The ID of the product.
   */
  id?: number;

  /**
   * The name of the product.
   */
  name: string;

  /**
   * The description of the product
   */
  description?: string;
}
