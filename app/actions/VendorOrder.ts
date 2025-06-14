'use server';

import {prisma} from '../../lib/prisma';

export async function VendorOrderdetails(id) {
  try {
    const orders = await prisma.order.findMany();
    return { success: true, orders };
  } catch (error) {
    console.error('Error fetching orders:', error);
    return { error: 'Failed to fetch orders' };
  }
}
