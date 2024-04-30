'use server';

import prisma from '@lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const registerArtisan = async (formData: FormData) => {
  const allUserData = formData.entries();
  const { userId } = Object.fromEntries(allUserData);

  const doesClientExist = await prisma.artisanProfile.findUnique({
    where: {
      userId: String(userId),
    },
  });

  const user = await prisma.user.update({
    where: {
      id: String(userId),
    },
    data: {
      role: 'ARTISAN',
    },
  });

  if (user.role === 'ARTISAN' && !doesClientExist) {
    await prisma.artisan.create({
      data: {
        profile: {
          create: {
            userId: String(userId) ?? '',
            email: 'amaben202phantom@gmail.com',
            howDidYouHearAboutUs: 'Linkedin',
            occupation: 'Plumber',
            sex: 'Male',
            username: 'algomachine',
          },
        },
      },
    });
    revalidatePath('/?artisan=true');
    redirect('/?artisan=true');
  }

  if (doesClientExist) {
    redirect('/?client=true');
  }
};
