import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const ChatOutlineIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ChatOutlineIcon;
