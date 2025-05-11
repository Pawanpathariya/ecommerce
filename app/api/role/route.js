const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export async function POST(req) {
  try {
   const {roleName} = await req.json();
   await prisma.role.create({
      data: {
        name: roleName
      }
    });   

    return Response.json({ message: 'User add successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add' }, { status: 500 });
  }
}


export async function GET(req) {
  try {
    const roles = await prisma.role.findMany();
    return Response.json(roles, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to fetch roles' }, { status: 500 });
  }
}