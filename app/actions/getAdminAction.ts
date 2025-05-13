'use server';

import {prisma} from '../../lib/prisma';

export async function getAdmin() {
  try {
    const admins = await prisma.user.findMany();
    return { success: true, admins };
  } catch (error) {
    console.error('Error fetching admins:', error);
    return { error: 'Failed to fetch admins' };
  }
}

export async function DeleteAdmin(id) {
    try {
      const user = await prisma.user.delete({where : {id}});
      return { success: true, user };
    } catch (error) {
      console.error('Error fetching user:', error);
      return { error: 'Failed to fetch user' };
    }
  }