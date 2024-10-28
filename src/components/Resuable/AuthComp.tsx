// Example usage
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return <button onClick={() => signOut()}>Log Out</button>;
}
