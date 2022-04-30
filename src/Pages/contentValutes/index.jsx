import cl from "./contValutes.module.css";
import cx from "classnames";

import { useEffect, useState } from "react";
import useCommRequest from "../../hoocks/useCommRequest";

import axios from "axios";
import { CircularProgress } from "@mui/material";
import uniqid from "uniqid";

import { ALL_CURRENCIES } from "../../API/constantsApi";

import logo from "../../img/investing-logo11.png";
import TabBase from "../../Components/UI/TabBase/TabBase";
import tabHeadValutes from "../../dB";
import { getPercentChange } from "../../Math/getPercentChange";
import { CURRENT__DATE } from "../../CONSTANS";

const ContentValutes = () => {
  const [currencyData, setCurrencyData] = useState("");
  const { Valute } = currencyData;
  const [getCurrency, loading, error] = useCommRequest(async () => {
    const respons = await axios.get(ALL_CURRENCIES).then((res) => res.data);
    setCurrencyData(respons);
  });

  useEffect(() => {
    getCurrency();
  }, []);

  if (loading) {
    return (
      <div className={cl.loading}>
        <CircularProgress color="inherit" />
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
        <div className={cl.tab__date}>
          <span>{CURRENT__DATE}</span>
        </div>
        <div className={cl.tab__wrap}>
          <TabBase head={tabHeadValutes} bold={700} />
          {Valute &&
            Object.values(Valute).map((curr) => {
              const arrow = curr.Value > curr.Previous ? "🠗" : "🠕";
              const diff = getPercentChange(curr.Previous, curr.Value);
              const tabCurr = [
                curr.CharCode,
                curr.Value,
                curr.Previous,
                `${arrow}   ${diff}`,
              ];
              return (
                <TabBase
                  key={uniqid()}
                  head={tabCurr}
                  diff={diff}
                  name={curr.Name}
                />
              );
            })}
        </div>
      </div>
      <div className={cx(cl.content__rigth, cl.valutes)}>
        <img src={logo} alt="logo" width={300} />
      </div>
    </div>
  );
};

export default ContentValutes;
