import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stack = (props: any) => {
  const { className, children } = props;
  
  return <div className={className}>{children}</div>;
};

export default Stack;
