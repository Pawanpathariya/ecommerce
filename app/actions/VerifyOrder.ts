'use server';

import crypto from 'crypto';
import {prisma} from '../../lib/prisma';
export async function verifyOrder(orderId: string, razorpayPaymentId: string, razorpaySignature: string) {
  const body = `${orderId}|${razorpayPaymentId}`;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(body)
    .digest('hex');


  if (expectedSignature === razorpaySignature) {
  //   await prisma.order.create({
  //     data: {
         
  //     },
  // });
    return { isOk: true };
    
  } else {
    console.error('Signature mismatch!');
    return { isOk: false };
  }
}
