'use server';

import {prisma} from '../../lib/prisma';

export async function SameDayDelivery() {
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