'use server';

import prisma from '@lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const registerClient = async (formData: FormData) => {
  // grab all data (.entries, fromEntries)
  const allUserData = formData.entries();
  const { userId } = Object.fromEntries(allUserData);

  const doesClientExist = await prisma.clientProfile.findUnique({
    where: {
      userId: String(userId),
    },
  });

  const user = await prisma.user.update({
    where: {
      id: String(userId),
    },
    data: {
      role: 'CLIENT',
    },
  });

  if (user.role === 'CLIENT' && !doesClientExist) {
    await prisma.client.create({
      data: {
        profile: {
          create: {
            address: 'No5, New world street, Abuja',
            image: '',
            userId: String(userId) ?? '',
            profession: 'Senior Software Engineer',
          },
        },
      },
    });
    revalidatePath('/?client=true');
    redirect('/?client=true');
  }

  if (doesClientExist) {
    redirect('/?client=true');
  }
};
