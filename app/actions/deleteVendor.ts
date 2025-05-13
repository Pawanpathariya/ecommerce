'use server';

import {prisma} from '../../lib/prisma';

export async function DeleteVendor(id) {
  try {
    const user = await prisma.user.delete({where : {id}});
    return { success: true, user };
  } catch (error) {
    console.error('Error fetching user:', error);
    return { error: 'Failed to fetch user' };
  }
}

