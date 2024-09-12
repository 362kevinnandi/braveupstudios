import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value

  const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  // Log the response status and text
  const responseText = await meRes.text(); // Get the response as raw text
  console.log('Response status:', meRes.status);
  console.log('Response text:', responseText);

  if (!meRes.ok) {
    console.error(`Error fetching user: ${meRes.status} ${meRes.statusText}`);
    throw new Error(`Failed to fetch user: ${meRes.status} ${meRes.statusText}`);
  }

  try {
    const { user } = JSON.parse(responseText); // Now parse the JSON
    return user;
  } catch (error) {
    console.error('Error parsing JSON:', error, responseText); // Log the error and response
    return null;
  }
}
