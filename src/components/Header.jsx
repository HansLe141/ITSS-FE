import React from "react";
import logoIT from "../asset/logoIT.png";
import textLogo from "../asset/text.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  const listItems = [
    {
      id: 0,
      title: "レストラン一覧",
      route: "/restaurant",
    },
    {
      id: 1,
      title: "料理一覧",
      route: "/food",
    },
    {
      id: 2,
      title: "ユーザー一覧",
      route: "/user",
    },
    {
      id: 3,
      title: "レビュー一覧",
      route: "/review",
    },
  ];
  return (
    <div>
      <div className="flex mx-6 p-5 justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="h-16 w-32 mr-6 flex justify-center items-center rounded-full border border-black bg-[#C6D6DD]">
            <img src={logoIT} alt="" className=" h-12 w-20" />
          </div>

          <img src={textLogo} alt="" className=" h-5" />
        </div>
        <div className="flex justify-between items-center">
          <div className="font-thin mr-10 text-4xl">ADMIN</div>
          <div>
            <button className="relative group">
              <div className="relative flex overflow-hidden items-center justify-center border border-black w-[50px] h-[50px]">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                  <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150" />
                  <div className="bg-black h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10" />
                  <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mx-10 mt-14">
        {/* <div className="h-12 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white">
          レストラン一覧
        </div>
        <div className="h-12 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white">
          料理一覧
        </div>
        <div className="h-12 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white">
          ユーザー一覧
        </div>
        <div className="h-12 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white">
          レビュー一覧
        </div> */}
        {listItems.map((item) => {
          return (
            <div key={item.id}>
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  isActive
                    ? `h-12 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-[#00F6E7]`
                    : `h-12 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white`
                }
              >
                {item.title}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
