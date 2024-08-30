import React from "react";
import "./Exhibitions.scss";
const exhibitionsList = [
  {
    year: 2020,
    name: "Bridges",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2021,
    name: "AEA-2021 international competition, painting",
    place: "Москва, Россия",
  },
  {
    year: 2021,
    name: "W&P",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2021,
    name: "Крылья",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2021,
    name: "St.Petersburg Art Week 22.06-27.06, 1st place",
    place: "Москва, Россия",
  },
  {
    year: 2021,
    name: "ABSTRACTUM Festival of Abstraction Arts, 1.06-6.06, 2nd place",
    place: "Москва, Россия",
  },
  {
    year: 2021,
    name: "Abstract reality, Moscow 24-29.08, 2nd place",
    place: "Москва, Россия",
  },
  {
    year: 2021,
    name: "ITSLIQUID Group 30.09.2021",
    place: "Венеция, Италия",
  },
  {
    year: 2021,
    name: "Zen Art Festival 29.09 - 3.10",
    place: "Москва, Россия",
  },
  {
    year: 2021,
    name: "Russian Art Award 15.09-29.09",
    place: "Москва, Россия",
  },
  {
    year: 2021,
    name: "Art-Cosmogony, Moscow 21.09-26.09",
    place: "Москва, Россия",
  },
  {
    year: 2021,
    name: "The Book of Arts",
    place: "online",
  },
  {
    year: 2021,
    name: "True Beauty Exhibition",
    place: "online",
  },
  {
    year: 2022,
    name: "True Beauty",
    place: "online",
  },
  {
    year: 2022,
    name: "LOVE - 2022",
    place: "Онтарио, Канада",
  },
  {
    year: 2022,
    name: "Gallerium Art Prize",
    place: "Онтарио, Канада",
  },
  {
    year: 2022,
    name: "SoloS - Spring 2022",
    place: "Торонто, Канада",
  },
  {
    year: 2022,
    name: "Краски жизни, май",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2023,
    name: "Believe",
    place: "online",
  },
  {
    year: 2023,
    name: "Artistonish",
    place: "online",
  },
  {
    year: 2023,
    name: "Мастерская - 2023, Галлерея Краски жизни",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2023,
    name: "Вкус корицы, золото и слякоть, гостиница Репинская",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2023,
    name: "Рецепт хорошего настроения, гостиница Репинская",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2023,
    name: "Тайный мир, Арт-бар 'Муха'",
    place: "Санкт-Петербург, Россия",
  },
  {
    year: 2024,
    name: "Галлерея Краски жизни",
    place: "Санкт-Петербург, Россия",
  },
];

function Exhibitions() {
  //   const { t } = useTranslation();
  //   const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <div className="exhibitions">
      <div className="block-wrapper">
      {/* <h2 className="heading">Exhibitions</h2> */}
        <div className="right-block">
        <img src="./exh-7.jpg" alt="" />
        <img src="./exh-6.jpg" alt="" />
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
          <img src="./IMG_9058.jpg" alt="" />
          {/* <img src="./IMG_7981.jpg" alt="" /> */}
        </div>
        <div className="left-block">
          <h2 className="heading">Exhibitions</h2>
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
