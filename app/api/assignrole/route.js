const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export async function POST(req) {
  try {
   const {userId, roleId} = await req.json();
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        roleId: roleId,
      },
    });

    return Response.json({ message: 'User add successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add' }, { status: 500 });
  }
}


