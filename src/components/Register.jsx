import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";
import Flexy from "./../assets/flexy.png";
import Icon from "./../assets/icon.png";
import BgImage from "./../assets/inicia-sesión-agente.jpg";

const Register = () => {
    const methods = useForm();

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
            value: /^(?:(?:00)?\+?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i,
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
        // Contenedor principal
        <div className="flex flex-col items-start absolute w-80 h-20 left-32 bottom-[703px]">
            {/* Flexy Top Nav */}

            <div className="absolute w-max h-24">
                <div className="flex flex-row items-start p-0 gap-8 w-32 h-10">
                    <img src={Flexy} alt="flexy" />
                </div>
            </div>

            {/* Titulos Register */}

            <div className="flex flex-col py-0 gap-8 absolute left-12 top-28">
                <h2 className="flex flex-none w-80 h-10 font-bold text-3xl tracking-[-0.01em text-[#000929]">
                    ¡Bienvenido!
                </h2>

                <p className="w-80 h-6 font-medium not-italic text-base text-[#000929] opacity-50">
                    Convertite ahora en un agente Flexy.
                </p>
            </div>

            {/* Inputs y boton registrate */}

            <FormProvider {...methods}>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col items-start px-0 py-0 gap-6 absolute left-12 top-64"
                    noValidate
                    autoComplete="off"
                >
                    <div className="flex flex-row items-center p-0 gap-2 w-52 h-12">
                        <div className="box-border border-solid rounded-full border-gray border-2">
                            <img src={Icon} alt="" className="w-8 h-8" />
                        </div>

                        <a href="" className="w-40 h-6 font-normal text-base text-black">
                            Subí tu foto de perfil
                        </a>
                    </div>

                    <Input name="nombre" type="text" placeholder="Nombre y Apellido" registerConfig={nameValidator} />

                    <Input name="phone" type="text" placeholder="+54 01 0200 000" registerConfig={phoneValidator} />

                    <Input name="email" type="text" placeholder="hola@tuemail.com" registerConfig={emailValidator} />

                    <Input
                        name="password"
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        registerConfig={passwordValidator}
                    />

                    <p className="m-auto w-56 h-5 not-italic font-normal text-sm text-[#6C727F]">
                        Debe tener al menos 8 caracteres.
                    </p>

                    <button
                        onClick={onSubmit}
                        className="flex flex-row justify-center items-center px-3 py-6 gap-[10px] w-80 h-12 bg-gradient-to-r from-[#6941C6] to-[#7065F0] rounded-lg text-white not-italic font-bold text-base text-center"
                    >
                        Registrate
                    </button>
                </form>
            </FormProvider>

            {/* Footer del register */}

            <div className="flex flex-col items-center p-0 gap-5 absolute w-80 h-20 left-6 top-[633px]">
                <div className="flex-row flex gap-2 mt-28 ml-10 text-sm">
                    <p className="text-gray-400">¿Ya tenés una cuenta?</p>
                    <a href="" className="text-black font-bold">
                        Iniciá sesión
                    </a>
                </div>
            </div>

            {/* Imagen de background */}
            <div className="absolute max-w-3xl w-screen h-screen left-96 top-0">
              <img src={BgImage} alt="bg-img" />
            </div>
        </div>
    );
};

export default Register;
