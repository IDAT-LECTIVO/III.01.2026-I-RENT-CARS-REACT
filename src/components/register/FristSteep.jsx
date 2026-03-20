import { MoveRight } from "lucide-react";

export function RegisterFirstSteep({ handlerSecondSteep }) {
  const handleNextSteep = () => {
    handlerSecondSteep();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Correo electrónico"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      <button className="bg-[#497ACE] text-[#ffffff] font-bold py-2 mt-6.5 px-4 h-11.25 rounded-[10px] hover:bg-[#3a6cb0] flex items-center justify-center gap-1.5" onClick={handleNextSteep}>
        <span>Siguiente</span>
        <MoveRight />
      </button>
    </>
  );
}
