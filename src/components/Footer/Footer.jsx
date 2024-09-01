import React from "react";
import { FaInstagram } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import UseLocalStorage from "../../hooks/UseLocalStorage";
import { PiTelegramLogo } from "react-icons/pi";

import "./Footer.scss";

function Home() {
  //   const { t } = useTranslation();
  //   const [storedValue, setValue] = UseLocalStorage("language", "ru");

  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content-wrapper">
          <div>© Svetlana Lebedeva 2021 - {currentYear}</div>
          Developed by 
          <a
            href="https://vk.com/razina_elina"
            target="_blank"
            className="footer-dev-link allura"
            rel="noreferrer"
          >
             Elina Razina
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://t.me/@SLebedeva8"
            target="_blank"
            alt="link to telegram account of Svetlana Lebedeva art"
            className="footer-social__link"
            rel="noreferrer"
          >
            <PiTelegramLogo />
          </a>
          <a
            href="https://www.instagram.com/svetlana.lebedeva.art"
            target="_blank"
            alt="instagram account of Svetlana Lebedeva"
            className="footer-social__link"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
