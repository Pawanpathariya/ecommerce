'use server';
import {prisma} from '../../lib/prisma';
export async function Adminaction(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const phone = formData.get('phone') as string;
console.log(name,email,password,phone)  
    
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
