import React from "react";
import { GetStaticProps } from "next";
import style from "./header-regions.module.scss";
import { Props } from "next/dist/client/script";
import HeaderRegionsResponsiveness from "./responsiveness/Header-regions-responsiveness";

const HeaderRegions: React.FC<Props> = (props) => {
  return (
    <div className={style.container}>
      <div className={style.region_box}>
        <ul className={style.list_style_header}>
          <li className={style.list_item}>
            14
            <span className={style.regiion_title}> regions</span>
          </li>

          <li className={style.list_item}>
            12
            <span className={style.regiion_title}> Timelapse Cameras</span>
          </li>
          <li className={style.list_item}>
            10
            <span className={style.regiion_title}> Timelapse Cameras</span>
          </li>
          <li className={style.list_item}>
            15
            <span className={style.regiion_title}> Drones</span>
          </li>

          <li className={style.list_item}>
            300K
            <span className={style.regiion_title}> Photos</span>
          </li>
          <li className={style.list_item}>
            150K
            <span className={style.regiion_title}> Videos</span>
          </li>
        </ul>
      </div>
      <div className={style.region_mobile}>
        <HeaderRegionsResponsiveness />
      </div>
    </div>
  );
};

export default HeaderRegions;
