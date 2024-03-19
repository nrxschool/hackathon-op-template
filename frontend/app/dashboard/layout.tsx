import { ReactNode } from "react";
import type { Metadata } from "next";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: {
    template: "%s | devstore",
    default: "devstore",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex w-full h-full">
      <div className="bg-background-500 w-[72px] p-2 gap-2 flex flex-col">
        <div className="bg-primary-500 w-[57px] h-[57px] rounded-md">.</div>
        <div className="bg-primary-500 w-[57px] h-[57px] rounded-md">.</div>
        <div className="border border-primary-500 w-[57px] h-[57px] rounded-md flex">
          <FaPlus className="text-primary-500 m-auto" size={32} />
        </div>
      </div>
      <div className="bg-background-300 w-[240px] w-min-[240px] flex flex-col justify-between">
        <div>
          <div className="bg-gradient-to-t from-primary-300 bg-primary-500 w-full h-[164px] rounded-b-lg"></div>
          <div className="p-4 flex flex-col justify-center">
            {/* <h4 className="text-lg">Configurações</h4> */}
            <div className="flex gap-1 items-center pl-1">
              <FaDiscord className="text-primary-500" />
              <label className="text-sm">Logado com o discord</label>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="bg-primary-500 bg-opacity-20 px-4 py-2">
              <a>Gerenciar Regras</a>
            </div>
            <div className="px-4 py-2">
              <a>Gerenciar Canais</a>
            </div>
            <div className="px-4 py-2">
              <a>Gerenciar Comunidade</a>
            </div>
            <div className="px-4 py-2">
              <a>Configurações</a>
            </div>
          </div>
        </div>
        <div className="px-4 flex flex-col gap-4">
          <button className="bg-primary-500 p-3 rounded-md font-normal w-full flex items-center gap-2 justify-center">
            <RiTeamFill size={24} />
            Conheça nosso time
          </button>
          <button className="bg-primary-500 p-3 rounded-md font-normal w-full flex items-center gap-2 justify-center">
            <BiSolidDonateBlood size={24} />
            Faça sua doação
          </button>
          <span className="w-fill h-[1px] bg-background-500"></span>
          <div className="flex flex-row justify-between pb-4">
            <div className="w-[28px] h-[28px] bg-primary-500"></div>
            <MdOutlineLogout className="text-primary-500" size={24} />
          </div>
        </div>
      </div>
      <div className="bg-background-500 flex flex-col flex-1">
        <div className="border-b border-primary-500 w-full ml-auto flex p-4 gap-4 justify-end">
          <MdSupportAgent className="text-primary-500" size={24} />
          <IoMdHelpCircleOutline className="text-primary-500" size={24} />
        </div>
        <div className="h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
}
