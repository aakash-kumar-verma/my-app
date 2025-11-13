"use client";
import { Button } from "@/app/components/Button";
import { SignInForm } from "@/app/components/forms/signIn";
import { SignUpForm } from "@/app/components/forms/signUp";
import { Link } from "@/app/components/Link";
import { Navbar } from "@/app/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [selectedForm, setSelectedForm] = useState<number>(1);
  return (
    <div className="h-[100vh] bg-linear-to-r from-[#212C4D] to-[#37446B] flex items-center justify-center">
      <div className="md:flex justify-center items-center gap-10 ">
        <div className="backdrop-blur-md shadow-lg  px-5 py-10 rounded flex flex-col justify-center items-center gap-5 min-w-[350px] mb-10 md:mb-0">
          <div className="rounded-full h-[200px] w-[200px] bg-[url(/login-thumbnail.jpg)] bg-cover bg-center bg-no-repeat mb-10"></div>
          <Button title="Sign in" onClick={() => {}} variant="primary" />
          <Button title="Sign up" onClick={() => {}} variant="secondary" />
          <Link href="/" label="Terms and conditions" />
        </div>
        <div className="backdrop-blur-md shadow-lg  px-5 py-10 rounded flex flex-col justify-center items-center gap-5 min-w-[350px]">
          <Navbar
            onClick={(id) => setSelectedForm(id)}
            options={[
              { id: 1, title: "Sign in" },
              { id: 2, title: "Sign up" },
            ]}
          />
          {selectedForm === 1 ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}
