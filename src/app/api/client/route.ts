import prisma from '@lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const data = await prisma.client.create({
      data: {
        profile: {
          create: {
            email: 'amaben1@gmail.com',
            firstName: 'Amala',
            lastName: 'Uzor',
            image: '',
            address: 'Dugbana',
          },
        },
      },
    });

    return NextResponse.json(
      {
        data,
      },
      {
        status: 201,
        statusText: 'Created',
      }
    );
  } catch (error) {
    console.log(error);
  }
};
