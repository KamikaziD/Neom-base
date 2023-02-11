import React from "react";
import style from "../sideBar/side-bar-menu.module.scss";
import { Props } from "next/dist/client/script";
import Image from "next/image";
import neom_logo from "../../../assets/logos/Logo_Neom.png";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Tabs from "../tabs/Tabs";

const SideBarMenu: React.FC<Props> = (props) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className={style.sidebar_container}>
        <div className={style.icon_back}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back</span>
        </div>
        <div className={style.logo}>
          <Image
            loader={myLoader}
            src={neom_logo}
            className={style.neom_logo}
            alt="Picture of the author"
            width={60}
            height={60}
          />
          <div className={style.btn_back}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </div>
        <div className={`${style.form_control} relative`}>
          <input
            type="text"
            placeholder="Search"
            className={`${style.search_input}`}
          />
          <span className="absolute right-0 top-0 mr-3 mt-1">
            <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
          </span>
        </div>
        <div className="p-1">
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
