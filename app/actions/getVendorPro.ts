'use server';

import {prisma} from '../../lib/prisma';

export async function getVendorPro(id) {
  console.log("Fetching all vendors");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        userId: id,
        status: "Accepted",
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}

