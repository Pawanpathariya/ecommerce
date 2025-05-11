'use server';

import Razorpay from 'razorpay';
import { prisma } from '../../lib/prisma';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createOrder(amount: number,user: any, products: any) {
  const options = {
    amount, // Amount in paise (cents)
    currency: 'INR',
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const orders = await razorpay.orders.create(options);
    if (!orders || !orders.id) {
      throw new Error('Order creation failed: No order ID received.');
    }
    return orders;
  } catch (err) {
    console.error('Error during order creation:', err);
    throw new Error('Order creation failed');
  }
}
