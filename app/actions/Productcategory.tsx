'use server';

import {prisma} from '../../lib/prisma';

export async function SameDayDelivery() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        sameDay: true,
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}


export async function Flowers() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        proCategory:'flower',
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}


export async function Cakes() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        proCategory:'cake',
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}

export async function Personalized() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        proCategory:'personalization',
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}



export async function Plants() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        proCategory:'plant',
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}



export async function Fashion() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        proCategory:'fashionandbeauty',
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}

export async function Living() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        proCategory:'homeandliving',
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}
export async function Food() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        proCategory:'foodhamper',
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}
export async function Weding() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        type: "marriage",
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}



export async function Anniversary() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        type: "anniversary",
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}

export async function Birthday() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        type: "birthday",
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}

export async function Othors() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        type: "other",
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}


export async function getAllProduct() {
  console.log("Fetching all products");
  try {
    const products = await prisma.productCate.findMany({
      where: {
        status:"Accepted"
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
}