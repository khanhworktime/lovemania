import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const InfoIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default InfoIcon;
