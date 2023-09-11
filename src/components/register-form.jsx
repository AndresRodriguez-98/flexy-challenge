import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Input from './Input'
import FileInput from "./file-input";

/* Validaciones y formulario */

const nameRules = {
  required: "Debe ingresar un nombre completo",
  maxLength: {
    value: 50,
    message: "El nombre no puede superar los 50 caracteres.",
  },
};

// Expresión regular para telefonos de argentina con el +54 opcional, sin espacios
const phoneRules = {
  required: "Debe ingresar un teléfono",
  pattern: {
    value: /^(?:(?:00)?\+?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i,
    message: "El número de teléfono no es válido",
  },
};
const emailRules = {
  required: "Debe ingresar una dirección de email",
  pattern: {
    value: /\S+@\S+\.\S+/i,
    message: "La dirección de email no es válida",
  },
};
const passwordRules = {
  required: "Debe ingresar una contraseña",
  maxLength: 50,
};

const RegisterForm = () => {
  const { handleSubmit } = useFormContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex flex-col gap-6"
      noValidate
      autoComplete="off"
    >
      <FileInput />

      <Input name="nombre" type="text" placeholder="Nombre y Apellido" rules={nameRules} />

      <Input name="phone" type="text" placeholder="+54 01 0200 000" rules={phoneRules} />

      <Input name="email" type="text" placeholder="hola@tuemail.com" rules={emailRules} />

      {/* Input Password con el icono del ojo funcionando */}
      <div style={{ display: "flex" }} className="flex-col justify-center">
        <Input
          name="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Ingresá tu contraseña"
          rules={passwordRules}
          endIcon={
            <button className="text-gray-600" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          }
        />
      </div>

      {/* Modo desktop tiene el siguiente tag p: */}
      <p className="hidden md:block text-[0.775rem] text-[#6C727F] text-center mt-[-1rem]">Debe tener al menos 8 caracteres.</p>

      {/* Modo mobile tiene el siguiente tag p: */}
      <p className="sm:hidden text-[#7065F0] text-center font-medium text-base">¿Olvidaste tu contraseña?</p>

      {/* Botón Registrate */}
      <input
        type="submit"
        className="flex justify-center items-center w-full h-12 cursor-pointer bg-gradient-to-r from-[#6941C6] to-[#7065F0] rounded-lg text-white font-bold"
        value="Registrate"
      />
    </form>
  );
};

export default RegisterForm;
