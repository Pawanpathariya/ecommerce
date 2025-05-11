'use server';

import { prisma } from '../../lib/prisma';

export async function Editproduct({ id, ...editdata }: any) {
  try {
    const product = await prisma.productCate.update({
      where: { id },
      data: editdata,
    });
    return { success: true, product };
  } catch (error) {
    console.error('Error updating product:', error);
    return { error: 'Failed to update product' };
  }
}
