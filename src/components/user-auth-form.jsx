"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from 'next-auth/react';


export default function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubSignIn = async () => {
    
    setIsLoading(true);

    setTimeout(() => {
    
      setIsLoading(false);
    }, 3000);
    await signIn('github', { callbackUrl: '/' });
  };


  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
    
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
    <form onSubmit={onSubmit} className="md:w-96 mx-auto">
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
          />
        </div>
        <Button disabled={isLoading} className="w-full">
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign In with Email
        </Button>
      </div>
    </form>
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-6">
   
    <Button variant="outline" type="button" disabled={isLoading} className="w-full" onClick={handleGithubSignIn}>
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.gitHub className="mr-2 h-4 w-4" />
      )}{" "}
      GitHub
    </Button>
   
      <Button variant="outline" type="button" disabled={isLoading} className="w-full">
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" /> 
        )}{" "}
        Google
      </Button>
    </div>
  </div>
  
  );
}

