const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const { roleId, permission } = await req.json();

    if (!roleId || !permission) {
      return Response.json({ error: 'Role ID and permission are required' }, { status: 400 });
    }

    const roledata = await prisma.role.findUnique({
      where: { id: roleId },
    });

    const index = roledata.permissions.indexOf(permission);
    if (index > -1) {
      const updatedPermissions = roledata.permissions.filter((perm) => perm !== permission);
      const updatedRole = await prisma.role.update({
        where: { id: roleId },
        data: {
          permissions: {
            set: updatedPermissions,
          },
        },
      });

      return Response.json({ message: 'permission removed successfully' }, { status: 200 });
    } else {
      const updatedRole = await prisma.role.update({
        where: { id: roleId },
        data: {
          permissions: {
            set: roledata.permissions.concat(permission),
          },
        },
      });

      return Response.json({ message: 'permission add successfully' }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to permission' }, { status: 500 });
  }
}

