import cl from "./contValutes.module.css";
import logo from "../../img/investing-logo11.png";
import cx from "classnames";
import { useComRequest } from "../../hooks/useComRequest";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const ContentValutes = () => {
  const [response, isLoading, isError] = useComRequest(fetchRates);
  console.log(isError);
  function fetchRates() {
    return axios
      .get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.data);
  }
  if (isLoading) {
    return (
      <div className={cl.loading}>
        <CircularProgress color="inherit" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className={cx(cl.loading, cl.error)}>
        <CircularProgress color="success" />
        <p>Ошибка загрузки...</p>
      </div>
    );
  }
  console.log(response);
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
