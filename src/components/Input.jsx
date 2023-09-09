import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Input = ({ name, type, placeholder, registerValidators }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <input
        className="bg-[#F7F7FD] border-[#E0DEF7] border-[1px] text-base rounded-lg h-12 px-3 w-full self-stretch placeholder:border-purple-400"
        type={type}
        placeholder={placeholder}
        {...register(name, registerValidators)}
      />
      <ErrorMessage name={name} errors={errors} />
    </div>
  );
};

export default Input;
