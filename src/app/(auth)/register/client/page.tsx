import { auth } from '@/auth/auth';
import { redirect } from 'next/navigation';
import { registerClient } from './actions';

const ClientRegister = async () => {
  const user = await auth();

  console.log(user);

  if (!user) {
    redirect('/');
  }

  // if (user.user)

  return (
    <div className="max-w-screen-xl border">
      Client Register and Create Profile
      <form action={registerClient}>
        <input type="hidden" value={user.user?.id} name="userId" />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default ClientRegister;
