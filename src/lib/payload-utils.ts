import { User } from '../payload-types';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { NextRequest } from 'next/server';

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
): Promise<User | null> => {
  const token = cookies.get('payload-token')?.value;

  if (!token) {
    return null;
  }

  try {
    const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    if (!meRes.ok) {
      console.error(`Failed to fetch user data: ${meRes.status} ${meRes.statusText}`);
      throw new Error('Failed to fetch user data');
    }

    const { user } = (await meRes.json()) as { user: User | null };
    return user;

  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
