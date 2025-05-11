'use server';

import {prisma} from '../../lib/prisma';

export async function getVendorAdmin() {
  console.log("Fetching all vendors");
  try {
    const vendors = await prisma.user.findMany(
      {
        where: {
          role: {
            name: 'vendor',
          },
        },
      }
    );
    return { success: true, vendors };
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return { error: 'Failed to fetch vendors' };
  }
}

