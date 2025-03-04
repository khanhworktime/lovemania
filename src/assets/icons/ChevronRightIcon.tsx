import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const ChevronRightIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default ChevronRightIcon;
