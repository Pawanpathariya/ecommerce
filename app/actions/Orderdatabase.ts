'use server';
import nodemailer from 'nodemailer';

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


          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });
      
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to:  orderData.user.email,
            subject: 'Your order has been placed',
            text: `Your order has been placed successfully. Order Id: ${response.razorpay_order_id} 
            Payment Id: ${response.razorpay_payment_id} `,
            html: `<p>Your order has been placed successfully. Order Id: ${response.razorpay_order_id} <br>Payment Id: ${response.razorpay_payment_id} <br>
            <b>Total Amount: ${orderData.amount/100}</b>
            <br>
            <table>
            <thead>
            <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>
            ${orderData.products.map((product) => {
              return `<tr>
              <td>${product.productName}</td>
              <td>${product.quantity}</td>
              <td>${product.price}</td>
              <td><img src="${product.image}" style="width: 50px; height: 50px;"/></td>
              </tr>`;
            }).join('')}

            </tbody>
            </table>
            </p>`,
          };
      
          await transporter.sendMail(mailOptions);



    return { success: true, orders };
  } catch (error) {
    console.error('Error updating product:', error);
    return { error: 'Failed to update product' };
  }
}


