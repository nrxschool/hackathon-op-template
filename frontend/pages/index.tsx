import type { NextPage } from "next";
import { FaCheckCircle } from "react-icons/fa";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader title="Home" />
      <div className="p-20 w-full">
        <div className="bg-background-300 rounded-lg grid grid-rows-3 justify-center items-center text-center">
          <div className="pt-20 ">
            <h1 className="font-bold text-7xl text-gray-100">All your design needs,</h1>
            <h1 className="font-bold text-6xl text-primary-500">one subscription</h1>
          </div>

          <p className="leading-relaxed text-2xl text-gray-100 w-2/3 m-auto">
            A flexible, no-fuss design subscription that puts top-tier design at your fingertips. Pause or cancel
            anytime.
          </p>

          <div className="w-2/3 m-auto text-xl text-gray-100">
            <div className="grid grid-cols-3 justify-center ">
              <p className="flex items-center justify-center gap-2">
                <FaCheckCircle />
                Unlimited tasks
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaCheckCircle />
                Unlimited tasks
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaCheckCircle />
                Unlimited tasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
