import React, { useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";
import Flexy from "./../assets/flexy.png";
import Icon from "./../assets/image_upload.svg";
import IconPlus from "./../assets/image_upload_plus.svg";
import BgImage from "./../assets/inicia-sesión-agente.jpg";

const Register = () => {
  const methods = useForm();
  const inputFile = useRef(null);

  {
    /* Validaciones */
  }

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

  // enviar datos del formulario:
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  // se puede probar con h-screen en el grid principal pero se estira la imagen y al ser mapa de bits no queda bien
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-6 mb-4">
        {/* Flexy Top Nav */}
        <div>
          <div className="flex justify-end sm:block sm:justify-normal">
            <div className="pt-7">
              <img src={Flexy} alt="Flexy logo" />
            </div>
          </div>
          <div className="flex justify-end sm:block sm:justify-normal">
            <hr className="w-[50%] sm:w-full mt-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>

        <div className="grid grid-cols-8">
          <div className="col-start-2 col-end-8 sm:col-start-2 sm:col-end-7">
            {/* Titulos Register */}
            <div className="mt-20">
              <h2 className="font-bold text-[1.6rem] leading-[125%]">
                ¡Bienvenido!
              </h2>
              <p className="font-medium text-[#000929] opacity-50 mt-2 mb-4">
                Convertite ahora en un agente Flexy.
              </p>
            </div>

            {/* Inputs y boton registrate */}

            <FormProvider {...methods}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-6"
                noValidate
                autoComplete="off"
              >
                <input type="file" ref={inputFile} className="hidden"></input>

                <div
                  className="flex flex-row items-center gap-2 mt-2"
                  onClick={() => {
                    inputFile.current.click();
                  }}
                >
                  <div className="box-border border-solid rounded-full border-gray border-2">
                    <img
                      src={Icon}
                      alt="Icono de subida de imagen"
                      className="p-3"
                    />
                  </div>
                  <img
                    src={IconPlus}
                    alt="Icono de subida de imagen (plus)"
                    className="absolute inline-flex items-center justify-center transform translate-x-[260%] -translate-y-[80%]"
                  />
                  <p className="font-normal text-base text-black">
                    Subí tu foto de perfil
                  </p>
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

                <p className="text-[0.775rem] text-[#6C727F] text-center mt-[-1rem]">
                  Debe tener al menos 8 caracteres.
                </p>

                <input
                  type="submit"
                  onClick={onSubmit}
                  className="flex justify-center items-center w-full h-12 bg-gradient-to-r from-[#6941C6] to-[#7065F0] rounded-lg text-white font-bold"
                  value="Registrate"
                />
              </form>
            </FormProvider>

            {/* Footer del register */}

            <div className="flex flex-row gap-2 justify-center text-sm mt-8">
              <p className="text-gray-400">¿Ya tenés una cuenta?</p>
              <a href="#" className="text-black font-bold">
                Iniciá sesión
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-7 hidden sm:block">
        <img src={BgImage} alt="bg-img" className="h-[100%]" />
      </div>
    </div>
  );
};

export default Register;
