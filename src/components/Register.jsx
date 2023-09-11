import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Flexy from "./../assets/flexy.png";
import BgImage from "./../assets/inicia-sesión-agente.jpg";
import RegisterForm from "./register-form";

// Componente principal, con el formulario, los titulos, el logo de la empresa y la imagen del background

const Register = () => {
  const methods = useForm({
    mode: 'all',
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
              <h2 className="text-center text-[#545F71] text-4xl sm:text-left font-bold sm:text-[1.6rem] leading-[125%]">
                ¡Bienvenido!
              </h2>
              <p className="text-center sm:text-left font-medium text-[#000929] opacity-50 mt-2 mb-4">
                Convertite ahora en un agente Flexy.
              </p>
            </div>

            <FormProvider {...methods}>
              <RegisterForm />
            </FormProvider>

            {/* Footer del register */}

            <div className="flex flex-row gap-1 justify-center text-[15px] mt-8">
              <p className="text-[#545F71]">¿Ya tenés una cuenta?</p>
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
