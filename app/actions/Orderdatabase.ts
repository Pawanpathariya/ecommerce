'use server';

import {prisma} from '../../lib/prisma';

export async function Orderdatabase({response,orderData}) {
console.log("response",response)
console.log("orderData",orderData)
  try {
    const orders = await prisma.order.create({
        data: {
          userName: orderData.user.name,
          userEmail: orderData.user.email,
          phoneNumber: orderData.user.phoneNumber,
          address: orderData.user.address,
          pincode: orderData.user.pincode,
          products: orderData.products,
          amount: orderData.amount/100,
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
          paymentStatus: 'paid',
        }
      });
    return { success: true, orders };
  } catch (error) {
    console.error('Error updating product:', error);
    return { error: 'Failed to update product' };
  }
}

