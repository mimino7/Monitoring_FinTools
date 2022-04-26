import cl from "./contValutes.module.css";
import logo from "../../img/investing-logo11.png";
import cx from "classnames";

const ContentValutes = () => {
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
