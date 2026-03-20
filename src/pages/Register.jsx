import { useState } from "react";
import { RegisterFirstSteep } from "../components/register/FristSteep";
import { RegisterSecondSteep } from "../components/register/SecondSteep";

export function Register() {

  const [steep, setSteep] = useState(1);
  const [isCompleteSteepOne, setIsCompleteSteepOne] = useState(false);

  const handlerSecondSteep = () => {
    setIsCompleteSteepOne(true);
    setSteep(2);
  }

  const handlerBackSteep = () => {
    setSteep(1);
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src="./logo-de-rentcars.png"
        alt="Logo de RentCars"
        style={{ width: "100%" }}
      />
      <h1 className="text-[#497ACE] font-bold text-[28px]">Registro</h1>
      <div className="flex gap-12">
        <div className={(steep === 1 ? "bg-[#3E546D] text-[#ffffff]" : isCompleteSteepOne ? "bg-[#28BC3E] text-[#ffffff]": "") + " w-10.5 h-10.5 rounded-full flex items-center justify-center"}>1</div>
        <div className={(steep === 2 ? "bg-[#3E546D] text-[#ffffff]" : "bg-[#ffffff] text-[#000000]") + " w-10.5 h-10.5 rounded-full flex items-center justify-center"}>2</div>
      </div>
      <div className="w-full px-7 mt-10 font-bold text-[16px]">
        <h2>Completa los campos</h2>
      </div>
      <form className="w-full mt-5 mb-10 px-7 flex flex-col gap-6">
        {
          steep === 1 ? <RegisterFirstSteep handlerSecondSteep={handlerSecondSteep} /> : steep === 2 ? <RegisterSecondSteep handlerBackSteep={handlerBackSteep} /> : null
        }
        <div className="flex justify-center">
          <span>
            ¿No tienes una cuenta?
            <a href="/login" className="text-[#FF960D] underline ml-2.5">
              Inicia sesión
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}
