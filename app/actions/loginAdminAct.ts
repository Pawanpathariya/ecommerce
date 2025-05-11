'use server';

import {prisma} from '../../lib/prisma';
import axios from 'axios';

export async function LoginAdminAct(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        const admin = await prisma.user.findFirst({
            where: {
                email,
                password
            }
        });
        if (admin) {
            return { success: true, admin };
        } else {
            return { error: 'Invalid email or password' };
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}

