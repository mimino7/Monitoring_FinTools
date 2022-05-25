import React from "react";

import cl from "./contStart.module.css";
import logo from "../../img/investing-logo11.png";
import Footer from "../../Components/footer/Footer";

const ContentStart = () => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/auto-complete",
    params: { q: "tesla", region: "US" },
    headers: {
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      <div className={cl.wrap__content}>
        <div className={cl.content__left}>
          <div className={cl.content__up}>
            <div className={cl.content__item}>
              <h3>Выгодные кредиты</h3>
              <span>Актуальные кредиты </span>
              <p>
                <span>с минимальной ставкой</span>
              </p>
            </div>
            <div className={cl.content__item}>
              <h3>Выгодные займы</h3>
              <span>Актуальные кредиты </span>
              <p>
                <span>с минимальной ставкой</span>
              </p>
            </div>
          </div>
          <div className={cl.content__bottom}>
            <div className={cl.content__item}>Three</div>
            <div className={cl.content__item}>Four</div>
            <div className={cl.content__item}>Five</div>
          </div>
        </div>
        <div className={cl.content__rigth}>
          <img src={logo} alt="logo" width={300} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentStart;
