import React, { Fragment, useRef } from "react";

import uniqid from "uniqid";

import cl from "./tabBase.module.css";
import cx from "classnames";

const TabBase = (props) => {
  const ref = useRef();

  const tooltipShow = (a) => {
    if (ref.current) ref.current.style.display = "block";
  };

  const tooltipHide = () => {
    if (ref.current) ref.current.style.display = "none";
  };
  const tooltipMove = (e) => {
    if (ref.current) {
      ref.current.style.left = e.pageX - 100 + "px";
      ref.current.style.top = e.pageY + 30 + "px";
    }
  };

  return (
    <div
      onMouseLeave={tooltipHide}
      onMouseEnter={tooltipShow}
      onMouseMove={tooltipMove}
      className={cl.tab__wrap}
    >
      <ul className={cl.tab}>
        {props.head &&
          props.head.map((value) => {
            return (
              <Fragment key={uniqid()}>
                {props.name && (
                  <div ref={ref} className={cl.toolTip}>
                    {props.name}
                  </div>
                )}
                <li
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
              </Fragment>
            );
          })}
      </ul>
    </div>
  );
};

export default TabBase;
