import { auth } from '@/auth/auth';
import JobCard from '@/components/elements/card/job-card';
import { SignIn } from '@/components/sign-in/sign-in';
import { SignOut } from '@/components/sign-out/sign-out';
import Image from 'next/image';

export default async function Login() {
  const user = await auth();
  console.log(user?.user?.image);
  console.log(user?.user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={user?.user?.image ?? ''} alt="" width={600} height={400} />
      <SignIn />
      <SignOut />

      <JobCard />
    </main>
  );
}
