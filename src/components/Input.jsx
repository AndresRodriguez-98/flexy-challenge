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
        className="bg-gray-200 w-80 h-12 py-2 px-10 text-gray-400 rounded-lg outline-none"
        type={type}
        placeholder={placeholder}
        {...register(name, registerValidators)}
      />
      <ErrorMessage name={name} errors={errors} />
    </div>
  );
};

export default Input;
