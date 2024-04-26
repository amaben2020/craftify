import prisma from '@lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const data = await prisma.client.create({
      data: {
        profile: {
          create: {
            email: 'amaben2@gmail.com',
            firstName: 'Amala2',
            lastName: 'Uzor2',
            image: '',
            address: 'Dugbana2',
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
