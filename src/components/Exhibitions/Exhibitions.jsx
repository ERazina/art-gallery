import React from "react";
import "./Exhibitions.scss";

const exhibitionsList = [
  {
    year: 2024,
    name: "Gallery Colors of Life",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2023,
    name: "Secret World, Art Bar 'Fly'",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2023,
    name: "Recipe for Good Mood, Repinskaya Hotel",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2023,
    name: "Taste of Cinnamon, Gold and Slush, Repinskaya Hotel",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2023,
    name: "Workshop - 2023, Gallery Colors of Life",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2023,
    name: "Artistonish",
    place: "online",
  },
  {
    year: 2023,
    name: "Believe",
    place: "online",
  },
  {
    year: 2022,
    name: "Colors of Life, May",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2022,
    name: "SoloS - Spring 2022",
    place: "Toronto, Canada",
  },
  {
    year: 2022,
    name: "Gallerium Art Prize",
    place: "Ontario, Canada",
  },
  {
    year: 2022,
    name: "LOVE - 2022",
    place: "Ontario, Canada",
  },
  {
    year: 2022,
    name: "True Beauty",
    place: "online",
  },
  {
    year: 2021,
    name: "True Beauty Exhibition",
    place: "online",
  },
  {
    year: 2021,
    name: "The Book of Arts",
    place: "online",
  },
  {
    year: 2021,
    name: "Art-Cosmogony, Moscow 21.09-26.09",
    place: "Moscow, Russia",
  },
  {
    year: 2021,
    name: "Russian Art Award 15.09-29.09",
    place: "Moscow, Russia",
  },
  {
    year: 2021,
    name: "Zen Art Festival 29.09 - 3.10",
    place: "Moscow, Russia",
  },
  {
    year: 2021,
    name: "ITSLIQUID Group 30.09.2021",
    place: "Venice, Italy",
  },
  {
    year: 2021,
    name: "Abstract Reality, Moscow 24-29.08, 2nd place",
    place: "Moscow, Russia",
  },
  {
    year: 2021,
    name: "ABSTRACTUM Festival of Abstraction Arts, 1.06-6.06, 2nd place",
    place: "Moscow, Russia",
  },
  {
    year: 2021,
    name: "St. Petersburg Art Week 22.06-27.06, 1st place",
    place: "Moscow, Russia",
  },
  {
    year: 2021,
    name: "Wings",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2021,
    name: "W&P",
    place: "Saint Petersburg, Russia",
  },
  {
    year: 2021,
    name: "AEA-2021 International Competition, Painting",
    place: "Moscow, Russia",
  },
  {
    year: 2020,
    name: "Bridges",
    place: "Saint Petersburg, Russia",
  },
];





function Exhibitions() {
  //   const { t } = useTranslation();
  //   const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <div className="exhibitions">
      <h2 className="heading">Exhibitions</h2>
      <div className="block-wrapper">
        {/* <h2 className="heading">Exhibitions</h2> */}
        <div className="right-block">
          <img src="./exh-7.jpg" className="exb" alt="" />
          {/* <img src="./exh-6.jpg" alt="" />
        <img src="./exh-4.jpg" alt="" />
        <img src="./exh-9.jpg" alt="" />
          <img src="./exh-1.jpg" alt="" />
          <img src="./exh-2.jpg" alt="" />
          <img src="./exh-3.jpg" alt="" />

          <img src="./exh-5.jpg" alt="" />




          <img src="./exh-10.jpg" alt="" />
          <img src="./1.jpg" alt="" />
          <img src="./IMG_9063_1.jpg" alt="" />
          <img src="./IMG_7981.jpg" alt="" />
          <img src="./IMG_9058.jpg" alt="" /> */}
          {/* <img src="./IMG_7981.jpg" alt="" /> */}
        </div>
        <div className="left-block">
          <nav>
            <ul>
              {exhibitionsList.map((item) => (
                <li>
                  {item.year} - {item.name} - {item.place}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions;
