import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/Input";
import { Label } from "components/Label";
import LayoutAuthentication from "layouts/LayoutAuthentication";

const SingUpPage = () => {
  const { control } = useForm({});
  return (
    <LayoutAuthentication heading="SingUp">
      <p className="text-xs font-normal text-center lg:text-sm text-text3">
        Already have an account?{" "}
        <Link to={"/sing-in"} className="font-medium text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex justify-center w-full mt-10 mb-8 font-semibold item-center gap-x-2 text-text2">
        <img srcSet="/logo-google.png 2x" alt="logo-google" />
        Sign up with google
      </button>
      <span className="block mb-4 text-xs font-normal text-center lg:text-sm text-text2 lg:mb-7">
        Or sign up with email
      </span>
      <form>
        <div>
          <Label>Full Name *</Label>
          <Input control={control} name="name" placeholder="Jhon Doe"></Input>
        </div>
      </form>
    </LayoutAuthentication>
  );
};

export default SingUpPage;
