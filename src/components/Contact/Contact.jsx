import React from "react";
import "./Contact.scss";

function Contact() {
  //   const { t } = useTranslation();
  //   const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <div className="contact">
      <h2 className="heading">Contacts</h2>
      <p className="paragraph">
        For questions regarding cooperation/purchase of paintings, please, email
        me
      </p>
      <a href="mailto:s.vento85@gmail.com" className="allura">
        s.vento85@gmail.com
      </a>
    </div>
  );
}

export default Contact;
