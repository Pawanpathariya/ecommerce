export const mapPermissionsToCasl = (permissions) => {
    const mapped = []
  
    const permissionMap = {
      addproduct: ['create', 'Product'],
      editproduct: ['update', 'Product'],
      deleteproduct: ['delete', 'Product'],
      displayproduct: ['read', 'Product'],
      permission: ['manage', 'Permission'],
      permissionview: ['read', 'Permission'],
      managevendor: ['manage', 'Vendor'],
      role: ['manage', 'Role'],
      managecategory: ['manage', 'Category'],
    }
  
    permissions.forEach((perm) => {
      const mapping = permissionMap[perm.toLowerCase()]
      if (mapping) {
        mapped.push(mapping)
      }
    })
  
    return mapped
  }
  