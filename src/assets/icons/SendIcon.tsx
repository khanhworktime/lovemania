import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const SendIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default SendIcon;
