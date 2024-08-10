import * as React from "react";

type TextPropsT = {
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  children: any;
};

const Text = (props: TextPropsT) => {
  const { as = "span", children } = props;
  const isSpan = as === "span";
  const isH1 = as === "h1";
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
      {isH1 && <h1>{children}</h1>}
      {isSpan && <span>{children}</span>}
    </div>
  );
};

export default Text;
