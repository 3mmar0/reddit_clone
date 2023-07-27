import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";
const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="h-6 w-6 mx-auto" />
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-zinc-600 mx-auto max-w-xs">
          By continuing, you are seeting up a reddit account and agree to our
        </p>
        {/* sign in form */}
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-zinc-700">
          New to Reddit?{"  "}
          <Link
            href={"/sign-up"}
            className="underline underline-offset-4 text-sm hover:text-zinc-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
