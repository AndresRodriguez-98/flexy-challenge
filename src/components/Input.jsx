import React from "react";
import { useController } from "react-hook-form";

// Componente general para los 4 inputs

const Input = ({ name, type, placeholder, rules, endIcon }) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    rules,
    defaultValue: "",
  });

  return (
    <div>
      <div className="bg-[#F7F7FD] border-[#E0DEF7] border-[1px] text-base rounded-lg px-3 w-full self-stretch flex justify-between">
        <input className="bg-[#F7F7FD] h-12 w-[85%]" type={type} placeholder={placeholder} {...field} />
        {endIcon}
      </div>
      {invalid && error && <p className="text-red-500 px-1.5 pt-1.5 text-xs">{error.message}</p>}
    </div>
  );
};

export default Input;
