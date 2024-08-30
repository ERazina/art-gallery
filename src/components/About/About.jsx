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
          Svetlana Lebedeva is a talented artist with a basic education in
          graphic design. She found her true passion in painting, where she
          found her unique style, combining elements of impressionism and
          realism. Over the past four years, Svetlana has taken part in a number
          of exhibitions in Russia (St. Petersburg, Moscow), and on the
          international stage, presenting her works in Italy and Canada.
        </p>
        <p>
          Her works convey a unique atmosphere born from a moment of
          inspiration, which makes each painting special and deep. Svetlana is a
          member of the Professional Artists Union in Russia, which allows her
          to constantly keep in touch with colleagues and follow the latest
          trends in the art world.
        </p>
        <p>
          Each painting by Svetlana is an invitation to her creative world,
          where the viewer can experience an emotional journey and feel the
          moments captured on canvas.
        </p>
        <p>
          To order a painting or discuss cooperation or just to say hello,
          please send Svetlana an email to{" "}
          <a
            href="mailto:s.vento85@gmail.com"
            className="allura email-link"
          >
            s.vento85@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
