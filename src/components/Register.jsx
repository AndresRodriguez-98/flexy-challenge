import React from "react";
import swal from 'sweetalert'

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    function validatePhone(phone) {
      var re =
        /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
      return re.test(phone);
    }

    if (name === "" || phone === "" || email === "" || password === "") {
      swal(<h2>Los campos no pueden estar vacios</h2>);
      return;
    }

    if (email !== "" && !validateEmail(email)) {
      swal(<h2>Debes escribir una dirección de correo válida</h2>);
      return;
    }

    if (phone !== "" && !validatePhone(phone)) {
      swal(<h2>Debes escribir un número de teléfono válido</h2>);
      return;
    }

    if (name !== "Andrés Rodríguez" || phone !== "02214345359" || email !== "reloo.cod@gmail.com" || password !== "react") {
      swal(<h2>Credenciales inválidas</h2>);
      return;
    }
  };

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

      <form
        onSubmit={submitHandler}
        className="flex flex-col items-start px-0 py-0 p-[197px] gap-6 absolute w-[352px] h-[586px] left-12 top-64"
      >
        <div className="flex flex-row items-center p-0 gap-[9px] w-52 h-12">
          <img src="" alt="" className="w-12 h-12" />
          <a href="">Subí tu foto de perfil</a>
        </div>

        <label>
          <input
            type="text"
            name="name"
            placeholder="Nombre y Apellido"
            className="bg-gray-200 py-2 px-10 text-gray-400 rounded-lg outline-none"
          />
        </label>

        <label>
          <input
            type="text"
            name="tel"
            placeholder="+54 01 0200 000"
            className="bg-gray-200 py-2 px-10 text-gray-400 rounded-lg outline-none"
          />
        </label>

        <label>
          <input
            type="text"
            name="email"
            placeholder="hola@tuemail.com"
            className="bg-gray-200 py-2 px-10 text-gray-400 rounded-lg outline-none"
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            placeholder="Ingresá tu contraseña"
            className="bg-gray-200 py-2 px-10 text-gray-400 rounded-lg outline-none"
          />
        </label>

        <button
          type="submit"
          className="flex flex-row justify-center items-center px-3 py-6 gap-[10px] w-[327px] h-[48px] bg-gradient-to-r from-[#6941C6] to-[#7065F0] rounded-lg text-white not-italic font-bold text-base text-center"
        >
          Registrate
        </button>

      </form>

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
