import { auth } from '@/auth/auth';
import { registerClient } from './actions';

const ClientRegister = async () => {
  const user = await auth();

  console.log(user);

  return (
    <div className="max-w-screen-xl border">
      Client Register and Create Profile
      <form action={registerClient}>
        <input type="hidden" value="client" name="role" />
      </form>
    </div>
  );
};

export default ClientRegister;
