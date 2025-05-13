'use server';
import nodemailer from 'nodemailer';
import {prisma} from '../../lib/prisma';

export async function ChangeStatus({id,stat}) {
  try {
    const updatedProduct = await prisma.productCate.update({
      where: { id },
      data: { status: stat },
    });
    
    const user = await prisma.user.findUnique({
      where: {
        id: updatedProduct.userId,
      },
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
      to: user.email,
      subject: `Your Product is ${updatedProduct.status} `,
      text: `Your product ${updatedProduct.proName} has been created successfully. You can view it in your dashboard status is ${updatedProduct.status}  for admin approval. Product detail is as follows: \n
      Category: ${updatedProduct.proCategory} \n
      Price: ${updatedProduct.proPrice} \n
      Description: ${updatedProduct.proDescription} \n
      Same Day Delivery: ${updatedProduct.sameDay ? 'Yes' : 'No'} \n
      Type: ${updatedProduct.type} \n`,
    };

    await transporter.sendMail(mailOptions);



    return { success: true, updatedProduct };
  } catch (error) {
    console.error('Error updating product status:', error);
    return { error: 'Failed to update product status' };
  }
}

