'use server';

import {prisma} from '../../lib/prisma';
import axios from 'axios';

export async function LoginVendorAct(prevState: any, formData: FormData) {
    console.log(formData);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        const vendor = await prisma.user.findFirst({
            where: {
                email,
                password
            }
        });
        if (vendor) {
            return { success: true, vendor };
        } else {
            return { error: 'Invalid email or password' };
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}

