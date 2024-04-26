import prisma from '@lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  console.log('yeah');
  try {
    const data = await prisma.clientJob.create({
      data: {
        title: 'Plumber',
        images: [''],
        colorTone: 'red',
        postedById: 2,
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
    return error;
  }
};
