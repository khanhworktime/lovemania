import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const MessageIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default MessageIcon;
