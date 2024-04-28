import { auth } from '@/auth/auth';
import { SignIn } from '@/components/sign-in/sign-in';
import Image from 'next/image';

export default async function Home() {
  const user = await auth();
  console.log(user?.user?.image);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={user?.user?.image ?? ''} alt="" width={600} height={400} />
      <SignIn />
    </main>
  );
}
