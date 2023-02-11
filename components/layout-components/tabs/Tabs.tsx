import React, { useState } from "react";
import style from "../tabs/tabs.module.scss";
import oxagon_main from "../../../assets/images/oxagon-main-hero-thumbnail.jpg";
import Image from "next/image";

const Tabs = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab clicks
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  interface ImageLoader {
    src: string;
    width: number;
    quality: number;
  }

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div>
      {/* Tab titles */}
      <div className={`${style.tab_container} flex`}>
        <div
          className={`${style.text_tab} w-1/3 text-center py-2 ${
            activeTab === 0 ? `${style.btn_tab} bg-gray-800 text-white` : ""
          }`}
          onClick={() => handleTabClick(0)}
        >
          Favorite
        </div>
        <div
          className={` ${style.text_tab} w-1/3 text-center py-2 ${
            activeTab === 1 ? `${style.btn_tab} bg-gray-800 text-white ` : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          All
        </div>
      </div>

      {/* Tab content */}
      <div className="p-4">
        {activeTab === 0 && (
          <div>
            <div className={style.image_container}>
              <Image
                loader={myLoader}
                src={oxagon_main}
                className={style.neom_image}
                alt="Picture of the author"
              />
              <div className={style.img_box}>
                <span className={style.img_title}>OXAGON</span>
              </div>
            </div>

            <div className={style.image_container}>
              <Image
                loader={myLoader}
                src={oxagon_main}
                className={style.neom_image}
                alt="Picture of the author"
              />
              <div className={style.img_box}>
                <span className={style.img_title}>Sindalah Island</span>
              </div>
            </div>
          </div>
        )}
        {activeTab === 1 && <p>Tab 2 content</p>}
      </div>
    </div>
  );
};

export default Tabs;
