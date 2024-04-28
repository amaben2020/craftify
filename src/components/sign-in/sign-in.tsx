import { signIn } from '@/auth/auth';

export function SignIn() {
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <button type="submit" className="font-primary text-lg font-bold">
          Sign in with Google
        </button>
      </form>

      <form
        action={async () => {
          'use server';
          await signIn('github');
        }}
      >
        <button type="submit" className="font-secondary">
          Signin with Github
        </button>
      </form>
    </>
  );
}
