import React, { useMemo, useState } from "react";
import axios from "axios";
import uniqid from "uniqid";

import cl from "./modal.module.css";
import cx from "classnames";

import TabBase from "../TabBase/TabBase";
import useCommRequest from "../../../hoocks/useCommRequest";

const Modal = ({ setActiveModal, active, id, PrevURL }) => {
  const [oldCurrs, setOldCurrs] = useState([]);
  const [getOldCurrency, oldLoading, oldError] = useCommRequest(async (id) => {
    let result = [];
    for (let i = 0; i < 15; i++) {
      const respons = await axios.get(PrevURL).then((res) => res.data);
      let dateCur = new Date(respons.Date).toLocaleString("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      Object.values(respons.Valute).filter((item) => {
        if (item.ID === id) {
          item.date = dateCur;
          result.push(item);
        }
      });
      PrevURL = respons.PreviousURL;
    }
    setOldCurrs(result);
  });

  useMemo(() => {
    active && id && getOldCurrency(id);
  }, [id]);

  return (
    <div
      onClick={() => setActiveModal(false)}
      className={cx(cl.modal, { [cl.active]: active })}
    >
      <div
        className={cx(cl.modal__content, { [cl.active]: active })}
        onClick={(e) => e.stopPropagation()}
      >
        <TabBase head={[oldCurrs.length && oldCurrs[0].Name]} bold={700} />
        <div className={cl.close} onClick={() => setActiveModal(false)}>
          ×
        </div>
        {oldCurrs.length &&
          oldCurrs.map((cur) => {
            const { date, CharCode, Value } = cur;
            return <TabBase key={uniqid()} head={[date, CharCode, Value]} />;
          })}
      </div>
    </div>
  );
};

export default React.memo(Modal);
