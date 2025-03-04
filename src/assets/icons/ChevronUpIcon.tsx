import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const ChevronUpIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M18 15L12 9L6 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default ChevronUpIcon;
