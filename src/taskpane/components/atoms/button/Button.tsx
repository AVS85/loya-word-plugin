import * as React from "react";
import { LevelOfCriticalEnum } from "../../../enums/suggestion";

type ButtonPropsT = {
  title: string;
  onClick: () => void;
  disabled: boolean;
};
const Button = (props: ButtonPropsT) => {
  const { title, onClick, disabled } = props;
  return (
    <div
      style={{
        border: "1px solid red",
        // borderWidth: "2px",
        // borderRadius: "12px",
        // borderStyle: "solid",
        // padding: "0 8px",
        // color: color,
        // backgroundColor: backgroundColor,
        // userSelect: "none",
        // backgroundColor: "#fff",
        // background: `rgba(${color}, 0.5)`,
      }}
    >
      <button onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </div>
  );
};

export default Button;
