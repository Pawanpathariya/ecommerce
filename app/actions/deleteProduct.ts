'use server';

import { prisma } from '../../lib/prisma';

export async function DeleteProduct(id: number) {
  try {
    const existingProduct = await prisma.productCate.findUnique({ where: { id } });

    if (!existingProduct) {
      return { error: 'Product not found' };
    }

    const product = await prisma.productCate.delete({ where: { id } });
    return { success: true, product };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { error: 'Failed to delete product' };
  }
}
