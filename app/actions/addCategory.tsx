'use server';

import { prisma } from '../../lib/prisma';
import axios from 'axios';

export async function addCategory(prevState: any, formData: FormData) {
  const category = formData.get('category') as string;
  const image = formData.get('image') as File | null;
  let ImageUrl = '';

  if (image) {
    const formData1 = new FormData();
    formData1.append('file', image);
    formData1.append('upload_preset', "pawan_cloud");

    try {
      const api = 'https://api.cloudinary.com/v1_1/dbwpnzi57/image/upload';
      const response = await axios.post(api, formData1);
      ImageUrl = response.data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  try {
    await prisma.category.create({
      data: {
        cat: category,
        Image: ImageUrl,
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Error creating category:', error);
    return { error: 'Failed to create category' };
  }
}

export async function getCategory() {
  try {
    const categorys = await prisma.category.findMany();
    return { success: true, categorys };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { error: 'Failed to fetch categories' };
  }
}

export async function DeleteCategory(id: number) {
  try {
    const category = await prisma.category.delete({ where: { id } });
    return { success: true, category };
  } catch (error) {
    console.error('Error deleting category:', error);
    return { error: 'Failed to delete category' };
  }
}
