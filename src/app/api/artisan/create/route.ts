import prisma from '@lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const data = await prisma.artisan.create({
      data: {
        profile: {
          create: {
            email: 'kululu@gmail.com',
            occupation: 'Plumber',
            username: 'kuzy',
            referee: {
              create: {
                name: 'Benoski',
                relationship: 'Ex',
                contactInformation: 'Byzhin, Kubwa, Abuja',
              },
            },
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
