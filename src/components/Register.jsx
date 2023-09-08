import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";

const Register = () => {
  const methods = useForm();

  const nameValidator = {
    required: "Debe ingresar un nombre completo",
    maxLength: 40,
  };
  const phoneValidator = {
    required: "Debe ingresar un teléfono",
    pattern: {
      value:
        /^(?:(?:00)?\+?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i,
      message: "El número de teléfono no es válido",
    },
  };
  const emailValidator = {
    required: "Debe ingresar una dirección de email",
    pattern: {
      value: /\S+@\S+\.\S+/i,
      message: "La dirección de email no es válida",
    },
  };
  const passwordValidator = {
    required: "Debe ingresar una contraseña",
    maxLength: 50,
  };

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex flex-col p-0 gap-32 items-start absolute w-[352px] h-[72px] left-[121px] bottom-[703px]">
      <div className="flex flex-col items-start p-0 gap-8 w-[352px] h-[72px]">
        <h2 className="w-[352px] h-[40px] font-bold text-3xl tracking-[-0.01em text-[#000929]">
          ¡Bienvenido!
        </h2>

        <p className="w-[352px] h-[24px] font-medium not-italic text-base text-[#000929] opacity-50">
          Convertite ahora en un agente Flexy.
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-start px-0 py-0 p-[197px] gap-6 absolute w-[352px] h-[586px] left-12 top-64"
          noValidate
          autoComplete="off"
        >
          <div className="flex flex-row items-center p-0 gap-[9px] w-52 h-12">
            <img src="" alt="" className="w-12 h-12" />
            <a href="">Subí tu foto de perfil</a>
          </div>

          <Input
            name="nombre"
            type="text"
            placeholder="Nombre y Apellido"
            registerConfig={nameValidator}
          />

          <Input
            name="phone"
            type="text"
            placeholder="+54 01 0200 000"
            registerConfig={phoneValidator}
          />

          <Input
            name="email"
            type="text"
            placeholder="hola@tuemail.com"
            registerConfig={emailValidator}
          />

          <Input
            name="password"
            type="password"
            placeholder="Ingresá tu contraseña"
            registerConfig={passwordValidator}
          />

          <button
            onClick={onSubmit}
            className="flex flex-row justify-center items-center px-3 py-6 gap-[10px] w-[327px] h-[48px] bg-gradient-to-r from-[#6941C6] to-[#7065F0] rounded-lg text-white not-italic font-bold text-base text-center"
          >
            Registrate
          </button>
        </form>
      </FormProvider>

      <div className="flex flex-col items-center p-0 gap-5 absolute w-80 h-20 left-6 top-[633px]">
        <div className="flex-row flex gap-2">
          <p className="text-gray-400">¿Ya tenés una cuenta?</p>
          <a href="" className="text-black">
            Iniciá sesión
          </a>
        </div>

        <p className="m-auto w-56 h-5 not-italic font-normal text-sm text-[#6C727F]">
          Debe tener al menos 8 caracteres.
        </p>
      </div>
    </div>
  );
};

export default Register;
