import React from "react";
import "./About.scss";

function About() {
  //   const { t } = useTranslation();
  //   const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <div className="about">
      <div className="left-block">
        <div className="portrait-wrapper">
          <img src="./me.jpg" alt="Svetlana Lebedeva" className="portrait" />
        </div>
      </div>
      <div className="right-block">
        <p>
          Svetlana Lebedeva is an Artist based in
          Saint-Petersburg, Russia.
        </p>
        <p>
          Svetlana represents herself apart from in the US and Canada where he
          is represented by Garance, and in Ireland where he is represented by
          UsFolk non-exclusively. That’s Nice, Love, Svetlana first ever book for
          children was published in 2022 by Book Island and is available to
          order now. Svetlana online Domestika course Book Cover Design:
          Illustrate Stories with Evocative Images is available now and you can
          watch the trailer below. You can read a recent interview with Owen
          here or even hear a
        </p>
        <p>
          To discuss a commission, ask about
          prints or just to say hello, please send Svetlana an email at
          s.vento85@gmail.com
        </p>
        <p>s.vento85@gmail.com / (+7)9045126424</p>

        {/* <img src="./IMG_9063_1.jpg" alt="" /> */}
        {/* <img src="./IMG_9063_1.jpg" alt="" /> */}
        {/* <img src="./me.jpg" alt="" /> */}
        {/* <img src="./exh-6.jpg" alt="" /> */}
        {/* <img src="./exh-4.jpg" alt="" /> */}
        {/* <img src="./exh-9.jpg" alt="" /> */}
        {/* <img src="./IMG_9058.jpg" alt="" /> */}
      </div>
    </div>
  );
}

export default About;
