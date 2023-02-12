import React, { ReactNode } from "react";
import HeaderRegions from "./layout-components/Header-regions";
import style from "../components/layout-components/header-regions.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import SideBarMenu from "./layout-components/sideBar/Side-bar-menu";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  // <div className="container mx-auto ml-10">
  //   <div className="grid grid-cols-3 gap-4">
  //     <div className="col-span-1 order-1 align-items-center p-4">
  //       <SideBarMenu />
  //     </div>
  //     <div className="col-span-2 order-2 align-items-center  p-4">
  //       <HeaderRegions />
  //     </div>
  //     <div className="col-span-1 order-3 col-start-3  p-4">
  //       <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
  //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  //           Button 1
  //         </button>
  //       </div>
  //       <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
  //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  //           Button 2
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  <div className="flex justify-center">
    <div className="w-1/5 p-1">
      <SideBarMenu />
    </div>
    <div className="w-1/2 p-2">
      <HeaderRegions />
    </div>
    <div className="w-1/6 p-2">
      <button
        className={`${style.btn_live} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mr-2`}
      >
        <span> LIVE </span> <span className={style.streaming}>Streaming</span>
      </button>
      <button
        className={`${style.btn_logout} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 `}
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </div>
  </div>
);

export default Layout;
