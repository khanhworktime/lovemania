import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const HomeIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default HomeIcon;
