import { NextRequest, NextResponse } from 'next/server';

export const POST = (request: NextRequest) => {
  try {
    console.log('Called');

    return NextResponse.json('Called');
  } catch (error) {
    console.log(error);
  }
};
