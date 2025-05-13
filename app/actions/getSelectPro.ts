'use server';

import {prisma} from '../../lib/prisma';
export async function GetPro(id: string) {
  try {
    const products = await prisma.productCate.findUnique({
      where: {
        id: parseInt(id), 
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}
