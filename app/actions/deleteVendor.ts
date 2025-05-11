'use server';

import {prisma} from '../../lib/prisma';

export async function DeleteVendor(id) {
  console.log(id);
  try {
    const user = await prisma.user.delete({where : {id}});
    console.log(user);
    return { success: true, user };
  } catch (error) {
    console.error('Error fetching user:', error);
    return { error: 'Failed to fetch user' };
  }
}

