import React from "react";
import style from "../login/login.module.scss";
import neom_logo from "../../assets/logos/Logo_Neom.png";
import Image from "next/image";

interface Props {}

const Login: React.FC = (props: Props) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className={style.login_container}>
      <div className={style.vimeo_wrapper_landscape}>
        <iframe
          className={style.vimeo_wrapper}
          src="https://player.vimeo.com/video/795156636?h=94c91d05ba&amp;byline=0&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
          width="426"
          height="240"
          frameBorder="0"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Ventuz1920x1080"
          data-ready="true"
        ></iframe>
      </div>

      <div className={style.vimeo_wrapper_mobile}>
        <iframe
          frameBorder="0"
          style={{ border: "none" }}
          className={style.vimeo_iframe_mobile}
          src="https://player.vimeo.com/video/794772352?h=390c77dd46&amp;byline=0&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
          width="196"
          height="426"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Ventuz780x1688"
          data-ready="true"
        ></iframe>
      </div>

      <div className={style.login_page__form}>
        <div>
          <Image
            loader={myLoader}
            src={neom_logo}
            alt="Picture of the author"
            width={150}
            height={155}
          />
        </div>

        <div>
          <button className={style.login_button}>
            Login with NEOM account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
