const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export async function POST(req) {
  try {
   const {name, email, password, phone} = await req.json();
   const user = await prisma.user.create({
     data: {
       name,
       email,
       password,
       phone
     },
   });

    return Response.json({ message: 'User add successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add' }, { status: 500 });
  }
}


export async function GET(req) {
  try {
    const users = await prisma.user.findMany({
      include: {
        role: true,
      },
    });
    console.log(users);
    return Response.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to fetch roles' }, { status: 500 });
  }
}