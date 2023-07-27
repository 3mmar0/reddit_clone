"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGgl = async () => {
    setisLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      // notify
      toast({
        title: "There was a problem.",
        description: "There was an error logging in with google",
        variant: "destructive",
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        isLoading={isLoading}
        onClick={loginWithGgl}
        size={"sm"}
        className="w-full items-center"
      >
        {isLoading ? null : <Icons.google className="h-5 w-5 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
