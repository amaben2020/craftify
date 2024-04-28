import { signOut } from '@/auth/auth';

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className="font-secondary">
        Sign Out
      </button>
    </form>
  );
}
