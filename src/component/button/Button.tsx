import React, { forwardRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = forwardRef((props: any, ref: any) => {
  const { label = "button", id, className, onClick, children, ...rest } = props;
  return (
    <button id={id} className={className} onClick={onClick} {...rest} ref={ref}>
      {children || label}
    </button>
  );
});
