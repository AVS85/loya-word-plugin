import * as React from "react";
import { LevelOfCriticalEnum } from "../../../enums/suggestion";

type InputPropsT = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
};
const Input = (props: InputPropsT) => {
  const { disabled, value, onChange, placeholder } = props;
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
      <input disabled={disabled} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
