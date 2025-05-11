'use server';

import {prisma} from '../../lib/prisma';

export async function getSales() {
  const orders = await prisma.order.findMany({
    where: { paymentStatus: "paid" },
    select: {
      createdAt: true,
      amount: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  return orders.map(order => ({
    date: order.createdAt.toISOString().split('T')[0], 
    amount: order.amount,
  }));
}
