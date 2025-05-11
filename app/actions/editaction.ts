'use server';
import { prisma } from '../../lib/prisma';

export async function Editproduct({ id, userId, ...editdata }: any) {
  try {
    const product = await prisma.productCate.update({
      where: { id },
      data: {
        ...editdata,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return { success: true, product };
  } catch (error) {
    console.error('Error updating product:', error);
    return { error: 'Failed to update product' };
  }
}
