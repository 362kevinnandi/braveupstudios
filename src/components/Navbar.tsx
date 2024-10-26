import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white w-full">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Icons.logo className="h-16 w-16" />
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="hidden z-50 lg:block lg:self-stretch">
              <NavItems />
            </div>

            {/* User Account and Cart */}
            <div className="flex items-center">
              <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-6">
                {!user && (
                  <Link
                    href="/sign-in"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Sign in
                  </Link>
                )}

                {!user && (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                {user ? (
                  <UserAccountNav user={user} />
                ) : (
                  <Link
                    href="/sign-up"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Create account
                  </Link>
                )}

                {user && (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                {!user && (
                  <div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                )}

                <div className="ml-4 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
