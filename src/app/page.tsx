import { auth } from '@/auth/auth';
import JobCard from '@/components/elements/card/job-card';

type TSearchParams = {
  searchParams: {
    client: boolean;
    artisan: boolean;
  };
};
export default async function Home({ searchParams }: TSearchParams) {
  console.log(searchParams);
  const user = await auth();
  console.log(user?.user?.image);
  console.log(user?.user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {searchParams.client && <p>Client Page</p>}
      {/* <Image src={user?.user?.image ?? ''} alt="" width={600} height={400} />
      <SignIn />
      <SignOut /> */}

      <JobCard />
    </main>
  );
}
