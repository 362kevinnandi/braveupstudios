import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
): Promise<User | null> => {
  const token = cookies.get('payload-token')?.value;

  if (!token) {
    console.error("Token is missing");
    return null;
  }

  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`;
  console.log("Fetching from URL:", url);

  try {
    const meRes = await fetch(url, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    if (!meRes.ok) {
      const errorText = await meRes.text();  // Log the exact error message
      console.error(`Error fetching user: ${meRes.status} ${meRes.statusText}`, errorText);
      throw new Error(`Failed to fetch user: ${meRes.status} ${meRes.statusText}`);
    }

    const { user } = await meRes.json();
    return user;
  } catch (error) {
    console.error("Error in getServerSideUser:", error);
    return null;
  }
};
