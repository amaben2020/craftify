import { auth } from '@/auth/auth';
import { redirect } from 'next/navigation';
import { registerArtisan } from './actions';

const ArtisanRegister = async () => {
  const user = await auth();

  console.log(user);

  if (!user) {
    redirect('/');
  }

  // if (user.user)

  return (
    <div className="max-w-screen-xl border">
      Artisan Register and Create Profile
      <form action={registerArtisan}>
        <input type="hidden" value={user.user?.id} name="userId" />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default ArtisanRegister;
