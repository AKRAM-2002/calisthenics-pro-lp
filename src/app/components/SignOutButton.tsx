import { useRouter } from 'next/router';
import { useClerk } from "@clerk/nextjs";

export default function CustomSignOutButton() {
  const router = useRouter();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');  // Redirect to the landing page after logout
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
