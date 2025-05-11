'use server';

import {prisma} from '../../lib/prisma';
import axios from 'axios';
export async function Vendoraction(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const phone = formData.get('phone') as string;
    
    try {
        const product = await prisma.user.create({
            data: {
                name, email , password , phone }
        });
        return { success: true };
    } catch (error) {
        console.error('Error creating product:', error);
        return { error: 'Failed to create product' };
    }
}
