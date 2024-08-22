import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import "./Contact.scss";

function Contact() {
  //   const { t } = useTranslation();
  //   const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <div className="contact">
      <h2>Contacts</h2>
      <p>
        По вопросам сотрудничества / приобретения картин, свяжитесь любым
        удобным способом
      </p>
      {/* телефон */}
      <a href="tel:+79045126424">+7-904-512-64-24</a>
      <br />
      {/*   email */}
      <a href="mailto:s.vento85@gmail.com">s.vento85@gmail.com</a>
      <br />
      {/* соц сети - телеграм, инстаграм */}
      <div className="socials">
        <a
          href="https://t.me/SLebedeva8"
          target="_blank"
          alt="telegram account of Svetlana Lebedeva"
          className="footer-social__link contact_sl"
          rel="noreferrer"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.instagram.com/svetlana.lebedeva.art"
          target="_blank"
          alt="instagram account of Svetlana Lebedeva"
          className="footer-social__link contact_sl" 
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Contact;
