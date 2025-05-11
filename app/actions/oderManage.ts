'use server';

import {prisma} from '../../lib/prisma';

export async function Orderdetails() {
  console.log("Fetching all orders from the database...");
  try {
    const orders = await prisma.order.findMany();
    return { success: true, orders };
  } catch (error) {
    console.error('Error fetching orders:', error);
    return { error: 'Failed to fetch orders' };
  }
}
