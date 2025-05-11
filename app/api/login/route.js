const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log(email, password);

   
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        role: true,
      },
    });
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
    if (user.password !== password) {
      return Response.json({ error: 'Invalid password' }, { status: 401 });
    }

    return Response.json({ message: 'User Login successfully', user }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to Register' }, { status: 500 });
  }
}

