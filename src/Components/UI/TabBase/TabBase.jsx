import React from "react";

import uniqid from "uniqid";

import cl from "./tabBase.module.css";
import cx from "classnames";

const TabBase = (props) => {
  return (
    <div className={cl.tab__wrap}>
      <ul className={cl.tab}>
        {props.head &&
          props.head.map((value) => {
            return (
              <li
                key={uniqid()}
                className={
                  String(value).includes("🠕")
                    ? cx(cl.item, cl.green)
                    : String(value).includes("🠗")
                    ? cx(cl.item, cl.red)
                    : cl.item
                }
                style={
                  props.bold && { fontWeight: props.bold, marginBottom: 7 }
                }
              >
                {value}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TabBase;
