'use server';

import { prisma } from '../../lib/prisma';

export async function getProductAdmin() {
  try {
    const products = await prisma.productCate.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}
