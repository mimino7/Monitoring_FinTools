import cl from "./contValutes.module.css";
import cx from "classnames";

import { useEffect, useState } from "react";
import useCommRequest from "../../hoocks/useCommRequest";

import axios from "axios";
import { CircularProgress } from "@mui/material";

import { LIST_CURRENCY } from "../../API/constantsApi";

import logo from "../../img/investing-logo11.png";

const ContentValutes = () => {
  const [currencyAll, setCurrencyAll] = useState("");
  const [getCurrency, loading, error] = useCommRequest(async () => {
    const respons = await axios.get(LIST_CURRENCY).then((res) => res.data);
    setCurrencyAll(respons);
  });
  console.log(currencyAll.Valute);
  useEffect(() => {
    getCurrency();
  }, []);
  if (loading) {
    return (
      <div className={cl.loading}>
        <CircularProgress color="success" />
      </div>
    );
  }
  if (error) {
    return (
      <div className={cx(cl.loading, cl.error)}>
        <CircularProgress color="inherit" />
        <p>Ошибка загрузки..... {error}</p>
      </div>
    );
  }
  return (
    <div className={cl.wrap__content}>
      <div className={cl.content__left}>
        <div className={cl.content__up}></div>
        <div className={cl.content__bottom}>
          <div className={cl.content__item}>Three</div>
          <div className={cl.content__item}>Four</div>
          <div className={cl.content__item}>Five</div>
        </div>
      </div>
      <div className={cx(cl.content__rigth, cl.valutes)}>
        <img src={logo} alt="logo" width={300} />
      </div>
    </div>
  );
};

export default ContentValutes;
