import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const FemaleIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 14V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default FemaleIcon;
